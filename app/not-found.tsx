import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a12] px-6 text-center text-white">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neon-blue">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl font-bold">Page not found</h1>
      <p className="mt-4 max-w-md text-white/60">
        This page does not exist. Head back to the gym homepage.
      </p>
      <Link
        href="/"
        className="btn-neon-green mt-10 inline-block px-8 py-4 text-sm font-bold uppercase tracking-wider"
      >
        Back to home
      </Link>
    </main>
  );
}
