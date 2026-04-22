import type { Metadata } from "next";
import Link from "next/link";
import { JakesLaxGenerator } from "@/components/generator/JakesLaxGenerator";
import { DROP_CONCEPTS } from "@/data/generator";
import { ArrowRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Jake's Lax It Up — Slogan Generator",
  description:
    "Infinite Jake's Lax mottos, bucketed 1–5 on the Balls scale. Drop a name to personalize. Built-in Midjourney prompts. Pick your vibe, hit the button, print it.",
};

export default function GeneratorPage() {
  return (
    <>
      <section className="bg-cream pt-12 md:pt-16 pb-8">
        <div className="container-x">
          <div className="inline-flex items-center gap-2 border border-ink/20 px-3 py-1.5 text-[10px] font-semibold tracking-[0.3em] uppercase mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-safety animate-pulse" />
            Generator
          </div>
          <h1 className="display text-mega leading-[0.88] text-balance mb-6">
            Jake&apos;s Lax<br />It Up.
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-ink/70 leading-relaxed">
            Infinite on-brand slogans, predone and bucketed 1–5 on the Balls scale.
            Drop a name to personalize. Copy the Midjourney prompt. Print it. Wear it.
            Or send it to us and we&apos;ll print it for your team.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-20 md:pb-24">
        <div className="container-x">
          <JakesLaxGenerator />
        </div>
      </section>

      <section className="bg-ink text-cream section-pad">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="label text-cream/60 mb-3">Built-in Drops</p>
              <h2 className="display text-giant leading-[0.9]">
                Six Drops,<br />Pre-Curated.
              </h2>
            </div>
            <p className="text-cream/70 max-w-md">
              Don&apos;t feel like rolling? Here are complete drop concepts — 5 to 8 designs each,
              already tuned by rating, palette, and vibe.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {DROP_CONCEPTS.map((d) => (
              <li key={d.id} className="bg-turf border border-cream/10 p-6 hover:border-cream/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="tag border-cream/30 text-cream/80">{d.rating}/5 Balls</span>
                  <span className="text-[10px] uppercase tracking-widest text-cream/50">{d.designs.length} designs</span>
                </div>
                <h3 className="display text-2xl leading-tight mb-2">{d.title}</h3>
                <p className="text-sm text-cream/70 mb-5">{d.tagline}</p>
                <p className="text-[10px] uppercase tracking-widest text-field mb-3">{d.palette}</p>
                <ol className="space-y-1.5 text-sm text-cream/80">
                  {d.designs.map((design, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-cream/40 font-mono text-xs shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{design}</span>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-field text-ink section-pad">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <h2 className="display leading-[0.92] text-[clamp(2rem,6vw,5rem)]">
            Love A Roll?<br />Want It On A Tee?
          </h2>
          <div>
            <p className="text-lg text-ink/80 leading-relaxed mb-6">
              Rolled something you and the squad want printed? Shoot it over — minimum 12 pieces,
              we handle the art, print, and ship. Custom rolls for club, travel, high school,
              college, rec, office — whoever.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Print This For My Team <ArrowRightIcon width={16} height={16} />
              </Link>
              <Link href="/shop" className="btn-ghost">Browse Ready-Made</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
