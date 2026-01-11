// store/authStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/auth";

// Create broadcast channel for cross-tab communication
const authChannel =
  typeof BroadcastChannel !== "undefined"
    ? new BroadcastChannel("auth-channel")
    : null;

interface AuthState {
  token: any;
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  isAuthenticated: boolean;
  justRegistered?: boolean;
  vaultPasswordRequired?: boolean | null;
  setUser: (user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    verified: boolean | null;
  }) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  setVaultPasswordRequired: (vaultPasswordRequired: boolean) => void;
  setJustRegistered: (justRegistered: boolean) => void;
  logout: () => void;
  getAccessToken: () => string | null;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      accessToken: null,
      refreshToken: null,
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user: { ...user, phone: user.phone || "" } }),
      setTokens: (accessToken, refreshToken) =>
        set({
          token: accessToken,
          accessToken,
          refreshToken,
          isAuthenticated: true,
        }),
      setVaultPasswordRequired: (vaultPasswordRequired: boolean) =>
        set({ vaultPasswordRequired }),
      setJustRegistered: (justRegistered: boolean) => set({ justRegistered }),
      logout: () => {
        set({
          token: null,
          accessToken: null,
          refreshToken: null,
          user: null,
          isAuthenticated: false,
          vaultPasswordRequired: null,
        });

        // Broadcast logout to other tabs
        if (authChannel) {
          authChannel.postMessage({ type: "LOGOUT" });
        }
      },
      getAccessToken: () => get().accessToken,
    }),
    {
      name: "auth-storage",
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        },
      },
    }
  )
);

// Listen for broadcast messages from other tabs
if (authChannel) {
  authChannel.onmessage = (event) => {
    if (event.data.type === "LOGOUT") {
      const state = useAuthStore.getState();
      if (state.isAuthenticated) {
        state.logout();
      }
    }
  };
}
