import Link from "next/link";

export function BrandStatement() {
  return (
    <section className="bg-ink text-cream section-pad relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_30%,#F5F1E8_1px,transparent_1px)] [background-size:14px_14px]" />
      <div className="container-x relative">
        <div className="max-w-4xl">
          <p className="label text-cream/60 mb-5">Manifesto</p>
          <h2 className="display leading-[0.92] text-balance text-[clamp(2rem,6vw,5.5rem)]">
            Lacrosse is the fastest sport on two feet. The apparel shouldn&apos;t look like
            it was designed in 2004.
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-cream/70 leading-relaxed">
            Jake&apos;s Lax is for players who already know they&apos;re good, already love
            the sport, and already have more than enough branded pinnies. This is for the
            rest of your closet. Funny tees. Premium cotton. No corny cross-stick graphics.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-3xl">
            {[
              { k: "01", h: "Premium blanks.", b: "6.5oz heavyweight cotton. Boxy fit. Garment-dyed. Feels broken-in on day one." },
              { k: "02", h: "Small runs.", b: "Every drop is limited. When it sells through, it sells through. No reprints." },
              { k: "03", h: "Real lax humor.", b: "Written by players. If it's not something you'd say in a locker room, we don't put it on a tee." },
            ].map((i) => (
              <div key={i.k} className="border-t border-cream/20 pt-5">
                <p className="display text-xs tracking-[0.3em] text-field">{i.k}</p>
                <h3 className="display text-2xl mt-2">{i.h}</h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">{i.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/about" className="btn-accent">
              Read the full story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
