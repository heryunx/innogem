// stores/useProfileStore.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getSession } from "next-auth/react";

type Profile = {
  user_id: number;
  email: string;
  username: string;
  user_role: string;
  full_name: string;
  status: number;
};

type ProfileState = {
  profile: Profile | null;
  isLoading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
  clearProfile: () => void;
};

export const useProfileStore = create<ProfileState>()(
  devtools((set) => ({
    profile: null,
    isLoading: false,
    error: null,

    fetchProfile: async () => {
      set({ isLoading: true, error: null });
      try {
        const session = await getSession();
        if (!session?.accessToken) {
          throw new Error("No access token found");
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        });

        const json = await res.json();

        if (!res.ok || !json.success) {
          throw new Error(json.error || "Failed to fetch profile");
        }

        const profile: Profile = json.data;

        set({ profile, isLoading: false });
      } catch (error: unknown) {
        if (error instanceof Error) {
          set({ error: error.message, isLoading: false });
        } else {
          set({ error: "Unknown error", isLoading: false });
        }
      }
    },

    clearProfile: () => set({ profile: null }),
  }))
);
