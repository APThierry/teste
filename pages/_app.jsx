import '../styles/globals.css';
import { useState } from 'react';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { getSupabaseBrowserClient } from '../lib/supabaseClient';

export default function App({ Component, pageProps }) {
  const [supabaseClient] = useState(() => getSupabaseBrowserClient());

  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
