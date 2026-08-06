export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-violet-600 border-t-transparent"></div>
        <p className="mt-4 text-zinc-400">
          Loading EMI Calculator...
        </p>
      </div>
    </main>
  );
}