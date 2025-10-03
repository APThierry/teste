import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '../lib/supabaseClient';
import { getSupabaseServerClient } from '../lib/supabaseServer';

export const getServerSideProps = async (ctx) => {
  const supabaseServer = getSupabaseServerClient(ctx);
  const {
    data: { session },
  } = await supabaseServer.auth.getSession();

  if (!session) {
    return {
      redirect: { destination: '/login', permanent: false },
    };
  }

  const { data: profileData } = await supabaseServer
    .from('profiles')
    .select('full_name')
    .eq('id', session.user.id)
    .maybeSingle();

  return {
    props: {
      initialSession: session,
      user: {
        id: session.user.id,
        email: session.user.email,
        full_name: profileData?.full_name || '',
      },
    },
  };
};

const withAuth = (Component) => {
  return function Protected(props) {
    const router = useRouter();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
      let isMounted = true;

      supabase.auth.getSession().then(({ data }) => {
        if (!isMounted) return;
        if (!data.session) {
          router.replace('/login');
        } else {
          setChecking(false);
        }
      });

      const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        if (!session) {
          router.replace('/login');
        }
      });

      return () => {
        isMounted = false;
        authListener.subscription.unsubscribe();
      };
    }, [router]);

    if (checking) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100">
          <div className="rounded-lg bg-white px-6 py-4 text-slate-600 shadow">Carregando...</div>
        </div>
      );
    }

    return <Component {...props} />;
  };
};

function Dashboard({ user }) {
  const router = useRouter();
  const [fullName, setFullName] = useState(user.full_name || '');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('/api/profile');
      if (!response.ok) return;
      const data = await response.json();
      setFullName(data.full_name || '');
    };
    fetchProfile();
  }, []);

  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name: fullName }),
      });

      if (!response.ok) throw new Error('Não foi possível atualizar o perfil.');
      setStatus('Perfil atualizado com sucesso.');
    } catch (profileError) {
      setStatus(profileError.message || 'Erro ao atualizar o perfil.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace('/login');
  };

  const greeting = fullName || user.full_name || user.email;

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 py-12">
        <div className="w-full rounded-3xl bg-white p-10 shadow-xl">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <span className="text-xl font-semibold">/N</span>
            </div>
            <h1 className="text-2xl font-semibold text-slate-900">Bem-vindo</h1>
            <p className="text-sm text-slate-600">Você está autenticado como {greeting}.</p>
          </div>

          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">
                Nome completo
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Atualize seu nome"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500 disabled:bg-blue-400"
            >
              {loading ? 'Salvando...' : 'Salvar'}
            </button>

            {status && <p className="text-center text-sm text-slate-600">{status}</p>}
          </form>

          <div className="mt-8 flex flex-col items-center gap-2 border-t border-slate-200 pt-6">
            <p className="text-xs uppercase tracking-wide text-slate-500">Sessão</p>
            <button
              onClick={handleSignOut}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Sair da conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
