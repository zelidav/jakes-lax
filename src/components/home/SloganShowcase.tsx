import { SloganCard } from "@/components/ui/SloganCard";
import { slogans } from "@/data/slogans";

export function SloganShowcase() {
  // Pick first 6 for the grid; the rest still appear in the marquee ticker elsewhere.
  const grid = slogans.slice(0, 6);
  return (
    <section className="bg-cream section-pad">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="label mb-3">The Playbook</p>
            <h2 className="display text-giant leading-[0.9]">
              A Slogan For<br />Every Position.
            </h2>
          </div>
          <p className="max-w-md text-ink/70">
            We drop new lines all season long. Got one we have to print? DM us on Instagram —
            if we use it, the tee is on us.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {grid.map((s, i) => (
            <SloganCard
              key={s.id}
              text={s.text}
              variant={i === 2 ? "accent" : i % 3 === 1 ? "dark" : "light"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
