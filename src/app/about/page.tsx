import type { Metadata } from "next";
import Link from "next/link";
import { SloganCard } from "@/components/ui/SloganCard";
import { ArrowRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Jake's Lax. Lacrosse culture, heavyweight cotton, and locker-room humor that actually lands.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-cream section-pad">
        <div className="container-x grid lg:grid-cols-[1.2fr_1fr] gap-14 items-end">
          <div>
            <p className="label text-cream/60 mb-4">About</p>
            <h1 className="display leading-[0.9] text-balance text-[clamp(2.75rem,9vw,8rem)]">
              We Take<br />Lacrosse<br />Serious.<br />
              <span className="text-field">(The tees, not so much.)</span>
            </h1>
          </div>
          <p className="text-lg text-cream/80 leading-relaxed max-w-md">
            Jake&apos;s Lax started in a basement in the suburbs of a city that absolutely does have a
            high school lax team. A couple of us, some bad print proofs, a shared group chat of
            slogans we couldn&apos;t post on our real Instagrams. Here we are.
          </p>
        </div>
      </section>

      <section className="bg-cream section-pad">
        <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="label mb-3">Chapter One</p>
            <h2 className="display text-5xl md:text-6xl leading-[0.92]">
              A Small Apparel Brand<br />For A Big Dumb Joke.
            </h2>
          </div>
          <div className="space-y-6 text-ink/80 text-lg leading-relaxed">
            <p>
              Here&apos;s the thing about lacrosse. It&apos;s fast. It&apos;s weird. It looks unhinged
              to anyone who didn&apos;t grow up with a stick. And the apparel — with maybe three
              exceptions — looks exactly the same as it did in 2004. Mesh shorts, giant
              cross-stick graphic, team name in a font from a CD-ROM.
            </p>
            <p>
              We wanted something we&apos;d actually wear off the field. Heavyweight cotton. Boxy
              fit. Real print quality. And slogans that sound like the thing the loudest
              midfielder yells in the huddle — not the thing the athletic director approves.
            </p>
            <p>
              Every tee we print is something we or our friends said out loud at a tournament.
              We call it the house motto: <span className="font-semibold">Clean Balls Only.</span>{" "}
              It&apos;s a joke, obviously. But it&apos;s also not. Dirty balls really don&apos;t fly
              straight. Long sticks really don&apos;t matter without clean balls. Loose balls
              really do win games. Locker-room humor that is, if you squint, also correct.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone section-pad border-y border-ink/10">
        <div className="container-x">
          <p className="label mb-3">What we make</p>
          <h2 className="display text-5xl md:text-6xl leading-[0.92] mb-12">
            Four Rules.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { k: "01", h: "Heavyweight only.", b: "6.5oz minimum. Real cotton. Real stitching. No mystery poly blends." },
              { k: "02", h: "Small runs.", b: "When it's gone, it's gone. We print in small batches and move on." },
              { k: "03", h: "Graphics that earn it.", b: "No filler. Every back print has a reason to be on a shirt." },
              { k: "04", h: "Made in the US.", b: "Cut, sewn, and printed in LA. Milled in NC. We know the people who make our stuff." },
            ].map((r) => (
              <div key={r.k} className="bg-cream p-6 border border-ink/10">
                <p className="display text-xs tracking-[0.3em] text-ink/50">{r.k}</p>
                <h3 className="display text-2xl mt-2">{r.h}</h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">{r.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream section-pad">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="label mb-3">House Motto</p>
              <h2 className="display text-5xl md:text-6xl leading-[0.92]">Clean Balls Only.</h2>
            </div>
            <p className="max-w-sm text-ink/70">
              Three words. One dress code. On the field, off the field, everywhere in between.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <SloganCard text="Clean Balls Only" variant="dark" />
            <SloganCard text="Loose Balls Matter" variant="accent" />
            <SloganCard text="Respect The Balls" variant="light" />
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream section-pad">
        <div className="container-x text-center">
          <h2 className="display leading-[0.92] text-[clamp(2.5rem,7vw,6rem)] mb-8">
            Got A Slogan?<br />Slide Into The DMs.
          </h2>
          <p className="max-w-xl mx-auto text-cream/70 mb-10">
            We read every one. If we print yours, the tee is free and your name goes on the
            inside tag.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://instagram.com/jakeslax" target="_blank" rel="noreferrer" className="btn-accent">
              DM @jakeslax <ArrowRightIcon width={16} height={16} />
            </a>
            <Link href="/contact" className="btn bg-transparent text-cream border-2 border-cream hover:bg-cream hover:text-ink">
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
