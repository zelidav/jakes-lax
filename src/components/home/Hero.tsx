import Link from "next/link";
import { ArrowRightIcon, InstagramIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-x pt-12 md:pt-20 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 border border-ink/20 px-3 py-1.5 text-[10px] font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-safety animate-pulse" />
              Drop 01 Live
            </div>
            <h1 className="display text-mega text-balance leading-[0.88] animate-fade-up">
              Clean<br />Balls<br />Only.
            </h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl text-ink/70 leading-relaxed animate-fade-up">
              Jake&apos;s Lax is a lacrosse lifestyle apparel brand for players who get the joke.
              Heavyweight tees. Funny back-print slogans. Built for the sideline, the locker
              room, and everywhere in between.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
              <Link href="/shop" className="btn-primary">
                Shop The Drop <ArrowRightIcon width={16} height={16} />
              </Link>
              <a
                href="https://instagram.com/jakeslax"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <InstagramIcon width={16} height={16} /> Follow @jakeslax
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <dt className="label">Fit</dt>
                <dd className="text-sm font-semibold">Boxy · True</dd>
              </div>
              <div>
                <dt className="label">Weight</dt>
                <dd className="text-sm font-semibold">6.5oz Heavy</dd>
              </div>
              <div>
                <dt className="label">Ships</dt>
                <dd className="text-sm font-semibold">In 48 Hours</dd>
              </div>
            </dl>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full bg-ink overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1a1a1a,#0a0a0a_70%)]" />
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_60%,#C8FF2C_0%,transparent_40%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                <span className="text-[10px] tracking-[0.4em] uppercase text-cream/60 mb-6">
                  Back Print — Drop 01
                </span>
                <span className="display text-5xl sm:text-6xl md:text-7xl text-cream leading-[0.92] text-balance">
                  Dirty Balls<br />Don&apos;t Fly<br />Straight.
                </span>
                <span className="mt-8 text-[10px] tracking-[0.4em] uppercase text-cream/60">
                  Heavyweight Cotton · Garment Dyed
                </span>
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-cream/50">
                <span className="h-1 w-8 bg-field" /> 100% Cotton
              </div>
            </div>
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-field text-ink px-4 py-3 rotate-3">
              <p className="display text-xl leading-none">$42</p>
              <p className="text-[9px] tracking-widest uppercase mt-0.5">Free shipping $75+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
