import type { Metadata } from "next";
import Link from "next/link";
import { SocialTile } from "@/components/ui/SocialTile";
import { InstagramIcon, ArrowRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Instagram",
  description: "Seen on the sideline. Tag @jakeslax to get reposted. Free tee every month for our favorite fit.",
};

const CAPS = [
  "DROP 01 OUT NOW",
  "POST YOUR FIT",
  "SEEN ON THE SIDELINE",
  "GB CULTURE",
  "TEAM DROPS",
  "WINTER BALL SZN",
  "RESPECT THE BALLS",
  "BENCH FIT OF THE WEEK",
  "@JAKESLAX",
];

export default function InstagramPage() {
  return (
    <>
      <section className="bg-cream pt-12 md:pt-16 pb-8">
        <div className="container-x">
          <p className="label mb-3 flex items-center gap-2">
            <InstagramIcon width={14} height={14} /> Instagram
          </p>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-end">
            <h1 className="display text-giant leading-[0.9]">
              Post Your Fit.<br />Tag @jakeslax.
            </h1>
            <p className="text-ink/70 max-w-md leading-relaxed">
              We repost the best fits from players, siblings, coaches, dog-walkers in cream
              Jake&apos;s tees — anyone. Best fit every month gets a free tee from the next drop.
            </p>
          </div>
          <div className="mt-8 flex gap-3">
            <a href="https://instagram.com/jakeslax" target="_blank" rel="noreferrer" className="btn-primary">
              Follow @jakeslax <ArrowRightIcon width={16} height={16} />
            </a>
            <Link href="/shop" className="btn-ghost">Get a Tee</Link>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {CAPS.map((c, i) => (
              <SocialTile key={i} index={i} caption={c} />
            ))}
          </div>
          <p className="mt-6 text-center text-xs uppercase tracking-widest text-ink/50">
            {/* Replace placeholder tiles with real posts using fetchInstagramFeed() in src/lib/integrations.ts */}
            Connect the Instagram Graph API in <span className="font-mono">src/lib/integrations.ts</span> to pull real posts here.
          </p>
        </div>
      </section>

      <section className="bg-ink text-cream section-pad">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <h2 className="display leading-[0.92] text-[clamp(2rem,6vw,5rem)]">
            How To Get Reposted.
          </h2>
          <ol className="space-y-5 text-cream/80 text-lg">
            <li className="flex gap-4"><span className="display text-field text-2xl">01</span> Wear the tee. On the field, in the car, wherever.</li>
            <li className="flex gap-4"><span className="display text-field text-2xl">02</span> Tag <strong>@jakeslax</strong> in the post or story.</li>
            <li className="flex gap-4"><span className="display text-field text-2xl">03</span> We repost the ones that slap. Monthly winner picked on vibe.</li>
          </ol>
        </div>
      </section>
    </>
  );
}
