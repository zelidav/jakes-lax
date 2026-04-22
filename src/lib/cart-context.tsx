"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import type { CartLine } from "@/types";

type State = { lines: CartLine[] };
type Action =
  | { type: "add"; line: CartLine }
  | { type: "remove"; productId: string; size: string; color: string }
  | { type: "update"; productId: string; size: string; color: string; quantity: number }
  | { type: "clear" }
  | { type: "hydrate"; lines: CartLine[] };

const STORAGE_KEY = "jakeslax-cart-v1";

const keyOf = (l: Pick<CartLine, "productId" | "size" | "color">) =>
  `${l.productId}|${l.size}|${l.color}`;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "hydrate":
      return { lines: action.lines };
    case "add": {
      const key = keyOf(action.line);
      const existing = state.lines.find((l) => keyOf(l) === key);
      if (existing) {
        return {
          lines: state.lines.map((l) =>
            keyOf(l) === key ? { ...l, quantity: l.quantity + action.line.quantity } : l,
          ),
        };
      }
      return { lines: [...state.lines, action.line] };
    }
    case "remove":
      return {
        lines: state.lines.filter(
          (l) => keyOf(l) !== keyOf({ productId: action.productId, size: action.size as any, color: action.color }),
        ),
      };
    case "update":
      return {
        lines: state.lines.map((l) =>
          keyOf(l) === keyOf({ productId: action.productId, size: action.size as any, color: action.color })
            ? { ...l, quantity: Math.max(1, action.quantity) }
            : l,
        ),
      };
    case "clear":
      return { lines: [] };
    default:
      return state;
  }
}

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (line: CartLine) => void;
  remove: (productId: string, size: string, color: string) => void;
  update: (productId: string, size: string, color: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [] });
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "hydrate", lines: JSON.parse(raw) });
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
  }, [state.lines, hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = state.lines.reduce((sum, l) => sum + l.quantity, 0);
    const subtotal = state.lines.reduce((sum, l) => sum + l.price * l.quantity, 0);
    return {
      lines: state.lines,
      itemCount,
      subtotal,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((o) => !o),
      add: (line) => {
        dispatch({ type: "add", line });
        setIsOpen(true);
      },
      remove: (productId, size, color) =>
        dispatch({ type: "remove", productId, size, color }),
      update: (productId, size, color, quantity) =>
        dispatch({ type: "update", productId, size, color, quantity }),
      clear: () => dispatch({ type: "clear" }),
    };
  }, [state, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
