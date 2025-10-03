# Next.js + Supabase Auth

## Requisitos\n- Node.js 18+ (testado em Node.js 22.17.1)\n- Conta Supabase com Auth habilitado

## Configuracao
1. Clone o projeto e copie `.env.example` para `.env.local`.
2. Preencha as variaveis com os valores do projeto Supabase (Auth + OAuth, se for usar Google).
3. No Supabase, execute o SQL abaixo para criar a tabela de perfis e ativar RLS.

```sql
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  created_at timestamptz default now()
);
alter table public.profiles enable row level security;
create policy "Profiles are viewable by owner"
  on public.profiles for select
  using (auth.uid() = id);
create policy "Profiles are insertable by owner"\n  on public.profiles for insert\n  with check (auth.uid() = id);\ncreate policy "Profiles are updatable by owner"\n  on public.profiles for update\n  using (auth.uid() = id);
```

## Variaveis de Ambiente\n- Local: use `.env.local`.\n- Producao (Node/Plesk): exporte as mesmas variaveis no ambiente do servidor, ajustando `NEXT_PUBLIC_SITE_URL` para `https://despesas.famillyoffice.com.br`.

## Rodar localmente\n```bash\nnpm install --include=dev\nnpm run dev\n```

## Deploy em Node/Plesk\n```bash\nnpm install --include=dev\nnpm run build\nnpm run start  # respeita a variavel PORT (fallback 3000)\n```

## Seguranca
- Nunca exponha `SUPABASE_SERVICE_ROLE_KEY` no cliente.
- Garanta que apenas chaves publicas (NEXT_PUBLIC_) sejam usadas no navegador.




