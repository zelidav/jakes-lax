import type { Metadata } from "next";
import Link from "next/link";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Sizes, shipping, team orders, returns — straight answers, no fluff.",
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-cream section-pad">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <div>
            <p className="label mb-3">FAQ</p>
            <h1 className="display text-giant leading-[0.92]">
              Answers, Not<br />Corporate Copy.
            </h1>
            <p className="mt-6 text-ink/70 max-w-sm">
              Can&apos;t find what you&apos;re looking for? <Link href="/contact" className="underline hover:no-underline">Email us</Link>. A human replies.
            </p>
          </div>
          <Accordion>
            {faqs.map((f) => (
              <AccordionItem key={f.question} question={f.question}>{f.answer}</AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-ink text-cream py-14">
        <div className="container-x grid md:grid-cols-2 gap-6 items-center">
          <h2 className="display text-3xl md:text-4xl leading-tight">Still stuck? We don&apos;t ghost.</h2>
          <div className="flex gap-3">
            <Link href="/contact" className="btn-accent">Contact Support</Link>
            <a href="mailto:info@jakeslax.com" className="btn bg-transparent text-cream border-2 border-cream hover:bg-cream hover:text-ink">
              info@jakeslax.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
