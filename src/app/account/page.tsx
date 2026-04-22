"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export default function AccountPage() {
  const { user, isAuthed, signOut, loading } = useAuth();

  if (loading) return null;

  if (!isAuthed) {
    return (
      <section className="bg-cream section-pad">
        <div className="container-x max-w-md">
          <p className="label mb-3">Account</p>
          <h1 className="display text-5xl leading-[0.95] mb-6">You&apos;re Not Signed In.</h1>
          <p className="text-ink/70 mb-8">
            Log in to see orders, saved info, and drop early access.
          </p>
          <div className="flex gap-3">
            <Link href="/account/login" className="btn-primary">Log In</Link>
            <Link href="/account/signup" className="btn-ghost">Create Account</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream section-pad">
      <div className="container-x">
        <p className="label mb-3">Account</p>
        <h1 className="display text-giant leading-[0.92] mb-8">Welcome back.</h1>
        <p className="text-ink/70 mb-12">Signed in as <strong>{user?.email}</strong></p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-bone p-6 border border-ink/10">
            <h2 className="display text-2xl mb-3">Orders</h2>
            <p className="text-sm text-ink/60 mb-6">
              No orders yet. Connect Supabase + Shopify to pull real order history here.
            </p>
            <Link href="/shop" className="btn-ghost text-xs">Go Shop</Link>
          </div>
          <div className="bg-bone p-6 border border-ink/10">
            <h2 className="display text-2xl mb-3">Saved Info</h2>
            <p className="text-sm text-ink/60 mb-6">
              Shipping, billing, and size preferences will live here.
            </p>
            <button className="btn-ghost text-xs">Edit</button>
          </div>
          <div className="bg-bone p-6 border border-ink/10">
            <h2 className="display text-2xl mb-3">Notifications</h2>
            <p className="text-sm text-ink/60 mb-6">
              Drop alerts, restocks, and the occasional tasteful meme.
            </p>
            <button className="btn-ghost text-xs">Manage</button>
          </div>
        </div>

        <button onClick={signOut} className="mt-12 text-sm underline text-ink/60 hover:text-safety">
          Sign out
        </button>
      </div>
    </section>
  );
}
