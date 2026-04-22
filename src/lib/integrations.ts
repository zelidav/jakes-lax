// ===================================================================
// Integration Stubs
// ===================================================================
// All third-party calls funnel through this file so the UI never has
// to care which backend is wired up. When you're ready to go live,
// swap the mock implementations for real API calls — the function
// signatures are already the ones the UI uses.
//
// Services scoped for integration:
//   - Shopify Storefront (products + checkout)     [products, checkout]
//   - Stripe                                        [checkout]
//   - Supabase                                      [auth + account]
//   - Klaviyo                                       [email + SMS capture]
//   - Instagram Basic Display / Graph               [feed grid]
// ===================================================================

type SubscribeResult = { ok: boolean; message: string };

// ------------------- Email capture (Klaviyo) -----------------------
export async function subscribeEmail(email: string): Promise<SubscribeResult> {
  // TODO: wire to Klaviyo
  //   const res = await fetch("https://a.klaviyo.com/client/subscriptions/?company_id=...", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json", revision: "2024-10-15" },
  //     body: JSON.stringify({
  //       data: {
  //         type: "subscription",
  //         attributes: {
  //           profile: { data: { type: "profile", attributes: { email } } },
  //           custom_source: "jakeslax.com footer",
  //         },
  //         relationships: { list: { data: { type: "list", id: process.env.NEXT_PUBLIC_KLAVIYO_LIST_ID } } },
  //       },
  //     }),
  //   });
  await new Promise((r) => setTimeout(r, 500));
  if (!email.includes("@")) return { ok: false, message: "That doesn't look like an email." };
  return { ok: true, message: "You're in. Watch your inbox — no spam, just drops." };
}

// ------------------- SMS capture (Klaviyo) -------------------------
export async function subscribeSms(phone: string): Promise<SubscribeResult> {
  // TODO: wire to Klaviyo SMS list (requires SMS consent + TCPA compliance)
  await new Promise((r) => setTimeout(r, 500));
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10) return { ok: false, message: "Need a real phone number." };
  return { ok: true, message: "Texts incoming. First drop alert is on us." };
}

// ------------------- Contact form ----------------------------------
export async function sendContactMessage(payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<SubscribeResult> {
  // TODO: POST to /api/contact or a service like Resend / Postmark / Supabase edge function.
  await new Promise((r) => setTimeout(r, 600));
  if (!payload.email.includes("@")) return { ok: false, message: "Need a valid email." };
  return { ok: true, message: "Got it. We'll get back to you within one business day." };
}

// ------------------- Auth (Supabase-shaped) ------------------------
export async function signUpUser(email: string, _password: string): Promise<SubscribeResult> {
  // TODO: supabase.auth.signUp({ email, password })
  await new Promise((r) => setTimeout(r, 600));
  if (!email.includes("@")) return { ok: false, message: "Valid email required." };
  return { ok: true, message: "Account created. Check your email to confirm." };
}

export async function signInUser(email: string, _password: string): Promise<SubscribeResult> {
  // TODO: supabase.auth.signInWithPassword({ email, password })
  await new Promise((r) => setTimeout(r, 500));
  if (!email.includes("@")) return { ok: false, message: "Enter a valid email." };
  return { ok: true, message: "Welcome back." };
}

// ------------------- Instagram feed --------------------------------
export type IgPost = { id: string; mediaUrl: string; permalink: string; caption?: string };

export async function fetchInstagramFeed(limit = 9): Promise<IgPost[]> {
  // TODO: GET https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink
  //       &access_token=${INSTAGRAM_ACCESS_TOKEN}
  return Array.from({ length: limit }).map((_, i) => ({
    id: `ig-placeholder-${i}`,
    mediaUrl: `/instagram/placeholder-${(i % 6) + 1}.jpg`,
    permalink: "https://instagram.com/jakeslax",
    caption: "CLEAN BALLS ONLY",
  }));
}

// ------------------- Checkout (Shopify / Stripe) -------------------
import type { CartLine } from "@/types";
export async function createCheckout(lines: CartLine[]): Promise<{ url: string }> {
  // Shopify:
  //   const checkout = await shopify.checkout.create({ lineItems: lines.map(...) })
  //   return { url: checkout.webUrl }
  // Stripe:
  //   const session = await stripe.checkout.sessions.create({ line_items: [...], mode: "payment", ... })
  //   return { url: session.url }
  console.info("[mock] createCheckout called with", lines.length, "line(s)");
  return { url: "#checkout-placeholder" };
}
