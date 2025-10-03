import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getSiteUrl } from '../lib/getSiteUrl';
import supabase from '../lib/supabaseClient';
import { getSupabaseServerClient } from '../lib/supabaseServer';

export const getServerSideProps = async (ctx) => {
  const supabaseServer = getSupabaseServerClient(ctx);
  const {
    data: { session }
  } = await supabaseServer.auth.getSession();

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    };
  }

  const showGoogle = Boolean(
    process.env.SUPABASE_OAUTH_GOOGLE_CLIENT_ID && process.env.SUPABASE_OAUTH_GOOGLE_SECRET
  );

  return {
    props: {
      initialSession: session,
      showGoogle
    }
  };
};

export default function Login({ showGoogle }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (signInError) {
      setError(signInError.message || 'Credenciais invalidas. Verifique e tente novamente.');
      setLoading(false);
      return;
    }

    await router.replace('/dashboard');
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError('Informe seu e-mail para recuperar a senha.');
      return;
    }

    setError('');
    setMessage('');
    setResetting(true);

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: getSiteUrl('/login')
    });

    if (resetError) {
      setError(resetError.message || 'Falha ao enviar instrucoes de recuperacao.');
    } else {
      setMessage('Enviamos as instrucoes de recuperacao de senha para seu e-mail.');
    }

    setResetting(false);
  };

  const handleGoogleLogin = async () => {
    setError('');
    setMessage('');
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: getSiteUrl('/dashboard')
      }
    });

    if (oauthError) {
      setError(oauthError.message || 'Nao foi possivel iniciar o login com Google.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-12">
        <div className="mb-8 flex flex-col items-center gap-4">
          <Image src="/logo.svg" alt="Logo" width={96} height={48} className="h-12 w-auto" priority />
          <h1 className="text-2xl font-semibold text-slate-900">Entrar</h1>
          <p className="text-sm text-slate-600">Acesse sua conta usando e-mail e senha.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-8 shadow">
          {error && (
            <div className="rounded-md border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          {message && (
            <div className="rounded-md border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              {message}
            </div>
          )}

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
              Senha
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500 disabled:bg-blue-400"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>

          <button
            type="button"
            onClick={handleResetPassword}
            disabled={resetting}
            className="w-full text-left text-sm text-blue-600 hover:text-blue-500 disabled:text-blue-400"
          >
            {resetting ? 'Enviando e-mail...' : 'Esqueci minha senha'}
          </button>

          {showGoogle && (
            <div className="pt-4">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px flex-1 bg-slate-200" />
                <span className="text-xs uppercase tracking-wide text-slate-500">Ou</span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:bg-slate-50"
              >
                <span>Entrar com Google</span>
              </button>
            </div>
          )}
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Ainda nao tem conta?{' '}
          <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
}





