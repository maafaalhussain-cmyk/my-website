export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-20 text-slate-900">
      <div className="w-full max-w-2xl rounded-2xl border border-sky-100 bg-white p-8 shadow-sm">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Marketplace foundation
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Project is stable and ready for the marketplace build.
        </h1>
        <p className="mt-4 text-base text-slate-600">
          This phase preserves the existing app shell and establishes the foundation needed for the
          storefront, seller registration, admin approval, and product management phases.
        </p>
      </div>
    </main>
  );
}
