"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type User = { email: string; name?: string };

type AuthContextValue = {
  user: User | null;
  isAuthed: boolean;
  loading: boolean;
  signIn: (email: string) => void;
  signOut: () => void;
};

const STORAGE_KEY = "jakeslax-user-v1";
const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {}
    setLoading(false);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthed: !!user,
      loading,
      signIn: (email: string) => {
        const u = { email };
        setUser(u);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
      },
      signOut: () => {
        setUser(null);
        localStorage.removeItem(STORAGE_KEY);
      },
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
