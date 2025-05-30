import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  user_id: number;
  email: string;
  full_name: string;
  user_role: "buyer" | "admin" | "supplier";
  token: string;
};

type AuthStore = {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    { name: "auth" } // akan disimpan di localStorage
  )
);
