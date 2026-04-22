import { EmailSignup } from "@/components/forms/EmailSignup";
import { SmsSignup } from "@/components/forms/SmsSignup";

export function SignupSection() {
  return (
    <section className="bg-field text-ink section-pad">
      <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
        <div>
          <p className="label mb-3">First Look</p>
          <h2 className="display leading-[0.9] text-[clamp(2.5rem,7vw,5.5rem)]">
            Get The Text.<br />Get The Drop.
          </h2>
          <p className="mt-6 max-w-lg text-ink/80 text-lg leading-relaxed">
            SMS subscribers get new drops <strong>24 hours before the public</strong>, plus a 10% off code for your first order. Email list gets a mid-week lax meme and occasional free-tee giveaways. No corporate spam. Promise.
          </p>
        </div>
        <div className="bg-cream p-6 md:p-8 space-y-8">
          <div>
            <p className="display text-2xl mb-3">Email</p>
            <EmailSignup cta="Join" />
          </div>
          <div className="hairline" />
          <div>
            <p className="display text-2xl mb-3">SMS — Drop alerts</p>
            <SmsSignup />
          </div>
        </div>
      </div>
    </section>
  );
}
