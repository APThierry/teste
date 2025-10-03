export default function Custom500() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-3xl bg-white px-10 py-16 text-center shadow-xl">
        <h1 className="text-2xl font-semibold text-slate-900">Algo deu errado</h1>
        <p className="mt-4 text-sm text-slate-600">
          Tente novamente em instantes ou recarregue a pagina.
        </p>
      </div>
    </div>
  );
}
