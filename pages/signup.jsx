import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import supabase from '../lib/supabaseClient';
import { getSupabaseServerClient } from '../lib/supabaseServer';
import { getSiteUrl } from '../lib/getSiteUrl';

export const getServerSideProps = async (ctx) => {
  const supabaseServer = getSupabaseServerClient(ctx);
  const {
    data: { session },
  } = await supabaseServer.auth.getSession();

  if (session) {
    return {
      redirect: { destination: '/dashboard', permanent: false },
    };
  }

  return { props: {} };
};

export default function Signup() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setInfo('');
    setLoading(true);

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: getSiteUrl('/login') },
    });

    if (signUpError) {
      setError(signUpError.message || 'Não foi possível criar a conta.');
      setLoading(false);
      return;
    }

    // Se a confirmação de e-mail for desativada no Supabase, o usuário já vem autenticado.
    if (data.user && data.session) {
      try {
        const response = await fetch('/api/profile', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ full_name: fullName }),
        });
        if (!response.ok) throw new Error('Falha ao salvar o perfil.');
      } catch {
        setInfo('Conta criada, mas não conseguimos atualizar o perfil automaticamente.');
      }
      setLoading(false);
      await router.replace('/dashboard');
      return;
    }

    // Fluxo padrão com confirmação por e-mail
    setInfo('Verifique seu e-mail para confirmar o cadastro antes de entrar.');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-12">
        <div className="mb-8 flex flex-col items-center gap-4">
          <Image src="/logo.svg" alt="Logo" width={96} height={48} className="h-12 w-auto" priority />
          <h1 className="text-2xl font-semibold text-slate-900">Criar conta</h1>
          <p className="text-sm text-slate-600">Preencha os dados para começar a usar o app.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-8 shadow">
          {error && (
            <div className="rounded-md border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          {info && (
            <div className="rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm text-blue-700">
              {info}
            </div>
          )}

          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">
              Nome completo
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Opcional"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

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
              onChange={(e) => setEmail(e.target.value)}
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
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500 disabled:bg-blue-400"
          >
            {loading ? 'Criando...' : 'Criar conta'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Já tem conta?{' '}
          <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
