function ErrorPage({ statusCode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-3xl bg-white px-10 py-16 text-center shadow-xl">
        <h1 className="text-2xl font-semibold text-slate-900">
          {statusCode ? `Erro ${statusCode}` : 'Erro inesperado'}
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Estamos trabalhando para resolver. Tente novamente em instantes.
        </p>
      </div>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode || 500;
  return { statusCode };
};

export default ErrorPage;
