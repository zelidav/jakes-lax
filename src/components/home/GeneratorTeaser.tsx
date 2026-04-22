import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function GeneratorTeaser() {
  return (
    <section className="bg-bone section-pad">
      <div className="container-x">
        <div className="bg-ink text-cream p-8 md:p-14 lg:p-20 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <p className="label text-field mb-3">New · Jake&apos;s Lax It Up</p>
            <h2 className="display leading-[0.92] text-[clamp(2.5rem,7vw,5.5rem)]">
              Need A Slogan?<br />Roll One.
            </h2>
            <p className="mt-6 max-w-xl text-cream/75 text-lg leading-relaxed">
              Our on-brand generator: 100+ predone slogans bucketed 1–5 on the Balls scale.
              Drop your name to personalize. Copy the Midjourney prompt. Print it yourself
              or send it to us for your team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/generator" className="btn-accent">
                Jake&apos;s Lax It Up <ArrowRightIcon width={16} height={16} />
              </Link>
              <Link
                href="/generator#drops"
                className="btn bg-transparent text-cream border-2 border-cream hover:bg-cream hover:text-ink"
              >
                See The Drops
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {[1, 2, 3, 4, 5].map((r) => {
              const size = 28 + r * 12;
              const color =
                r === 5 ? "bg-safety" : r === 4 ? "bg-field" : r === 3 ? "bg-cream" : "bg-athletic-400";
              return (
                <div key={r} className="flex flex-col items-center justify-end">
                  <span
                    style={{ width: size, height: size }}
                    className={`rounded-full ${color} border-2 border-cream/20`}
                  />
                  <span className="mt-2 text-[10px] uppercase tracking-widest text-cream/50">
                    {r}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
