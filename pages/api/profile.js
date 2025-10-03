import { getSupabaseServerClient } from '../../lib/supabaseServer';

export default async function handler(req, res) {
  const supabase = getSupabaseServerClient({ req, res });
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session) {
    return res.status(401).json({ error: 'Nao autenticado.' });
  }

  const userId = session.user.id;

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ full_name: data?.full_name || '' });
  }

  if (req.method === 'PUT') {
    const { full_name: fullName } = req.body || {};

    if (fullName !== undefined && typeof fullName !== 'string') {
      return res.status(400).json({ error: 'O nome deve ser uma string.' });
    }

    const trimmedName = typeof fullName === 'string' ? fullName.trim() : null;

    const { data, error } = await supabase
      .from('profiles')
      .upsert(
        {
          id: userId,
          full_name: trimmedName || null
        },
        {
          onConflict: 'id'
        }
      )
      .select('full_name')
      .single();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ full_name: data.full_name || '' });
  }

  res.setHeader('Allow', ['GET', 'PUT']);
  return res.status(405).end('Method Not Allowed');
}
