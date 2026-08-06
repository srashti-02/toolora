export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">

      <div className="text-center">

        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-violet-600 border-t-transparent"></div>

        <h2 className="mt-6 text-2xl font-bold">
          Loading Unit Converter...
        </h2>

        <p className="mt-3 text-zinc-400">
          Preparing accurate conversions...
        </p>

      </div>

    </main>
  );
}