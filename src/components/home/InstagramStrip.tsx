import Link from "next/link";
import { SocialTile } from "@/components/ui/SocialTile";
import { InstagramIcon, ArrowRightIcon } from "@/components/ui/Icons";

// 6 placeholder tiles. When real posts are wired, fetch from the Instagram
// Graph API via fetchInstagramFeed() in src/lib/integrations.ts.
const CAPTIONS = [
  "DROP 01 OUT NOW",
  "SEEN ON THE SIDELINE",
  "POST YOUR FIT",
  "GB CULTURE",
  "TEAM ORDERS WELCOME",
  "@JAKESLAX",
];

export function InstagramStrip() {
  return (
    <section className="bg-cream section-pad">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <p className="label mb-3 flex items-center gap-2">
              <InstagramIcon width={14} height={14} /> Seen On The Sideline
            </p>
            <h2 className="display text-giant leading-[0.9]">
              Post Your Fit.<br />Tag @jakeslax.
            </h2>
            <p className="mt-4 max-w-lg text-ink/70">
              Tag us and we&apos;ll repost. Best fit every month gets a free tee from the next drop.
            </p>
          </div>
          <a
            href="https://instagram.com/jakeslax"
            target="_blank"
            rel="noreferrer"
            className="btn-primary self-start"
          >
            Follow @jakeslax <ArrowRightIcon width={16} height={16} />
          </a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {CAPTIONS.map((c, i) => (
            <SocialTile key={i} index={i} caption={c} />
          ))}
        </div>
        <p className="mt-6 text-center text-xs uppercase tracking-widest text-ink/50">
          {/* Swap this block for an embedded Instagram feed or Graph API fetch when ready. */}
          Real Instagram embed drops in here — see <span className="font-mono">src/lib/integrations.ts</span>
        </p>
      </div>
    </section>
  );
}
