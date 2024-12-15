import { create } from "zustand";

interface AuthState {
  email: string;
  username: string;
  setEmail: (email: string) => void;
  setUsername: (username: string) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  email: "",
  username: "",
  setEmail: (email) => set({ email }),
  setUsername: (username) => set({ username }),
}));

export default useAuthStore; // Default export added
