import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">404</p>
        <h1 className="mt-4 font-serif text-5xl">This page doesn&apos;t exist.</h1>
        <Link href="/" className="mt-8 inline-block rounded-full border border-line-strong px-5 py-2.5 text-sm hover:border-cyan">
          Back to the portfolio
        </Link>
      </div>
    </main>
  );
}
