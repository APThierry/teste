import { getSupabaseServerClient } from '../lib/supabaseServer';

export const getServerSideProps = async (ctx) => {
  const supabase = getSupabaseServerClient(ctx);
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    };
  }

  return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  };
};

export default function Index() {
  return null;
}
