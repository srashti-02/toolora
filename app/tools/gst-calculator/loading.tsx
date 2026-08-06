export default function Loading() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">
        <div className="text-center">
          <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-violet-600 border-t-transparent"></div>

          <h2 className="mt-6 text-2xl font-bold">
            Loading GST Calculator...
          </h2>

          <p className="mt-2 text-zinc-400">
            Please wait while we prepare everything.
          </p>
        </div>
      </section>
    </main>
  );
}