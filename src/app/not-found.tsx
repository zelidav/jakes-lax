import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-cream section-pad">
      <div className="container-x text-center max-w-2xl mx-auto">
        <p className="label mb-3">404</p>
        <h1 className="display text-[clamp(3rem,10vw,8rem)] leading-[0.9]">
          That Pass Was Wide.
        </h1>
        <p className="mt-6 text-ink/70">
          This page doesn&apos;t exist, got moved, or never made it out of training camp.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Link href="/" className="btn-primary">Back Home</Link>
          <Link href="/shop" className="btn-ghost">Shop Instead</Link>
        </div>
      </div>
    </section>
  );
}
