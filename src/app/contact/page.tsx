import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { InstagramIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions, team orders, wholesale, press — reach out. A real human answers.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream section-pad">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div>
            <p className="label mb-3">Contact</p>
            <h1 className="display text-giant leading-[0.92]">
              Hit Us Up.
            </h1>
            <p className="mt-6 text-ink/70 max-w-md leading-relaxed">
              Orders, returns, team deals, press, partnerships, slogan submissions — all go to
              the same inbox. We usually respond within one business day.
            </p>
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="label">Email</dt>
                <dd>
                  <a href="mailto:info@jakeslax.com" className="text-lg font-semibold hover:underline">
                    info@jakeslax.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label">DMs</dt>
                <dd>
                  <a
                    href="https://instagram.com/jakeslax"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-lg font-semibold hover:underline"
                  >
                    <InstagramIcon /> @jakeslax
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label">Team Orders / Wholesale</dt>
                <dd className="text-ink/80 leading-relaxed max-w-sm">
                  Club, travel, high school, college, rec. Send us your roster and we&apos;ll
                  send a deck within 24 hours. Minimum 12 pieces.
                </dd>
              </div>
            </dl>
          </div>
          <div className="bg-bone p-6 md:p-10 border border-ink/10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
