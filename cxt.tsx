import { createContext, useContext, type PropsWithChildren } from "react";
import { useStorageState } from "./useStorageState";
import { router } from "expo-router";

type AuthContextType = {
  signIn: (data: { data: { jwt: string } }) => void;
  signOut: () => void;
  session: string | null;
  isLoading: boolean;
};

const defaultContextValue: AuthContextType = {
  signIn: () => {
    throw new Error("signIn method not implemented.");
  },
  signOut: () => {
    throw new Error("signOut method not implemented.");
  },
  session: null,
  isLoading: false,
};

const AuthContext = createContext<AuthContextType>(defaultContextValue);

export const useSession = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useSession must be used within a <SessionProvider />.");
  }

  return context;
};

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [[isLoading, session], setSession] = useStorageState<string | null>(
    "session"
  );

  const signIn = (data: { data: { jwt: string } }) => {
    setSession(data.data.jwt);
    router.replace("/(app)/(tabs)");
  };

  const signOut = () => {
    setSession(null);
  };

  const value = { signIn, signOut, session, isLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
