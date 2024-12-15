import { createContext, useContext, type PropsWithChildren } from "react";
import { useStorageState } from "./useStorageState";
import { router } from "expo-router";

type AuthContextType = {
  signIn: (data: { data: { jwt: string } }) => void;
  signOut: () => void;
  session: string | null;
  userName?: string | null;
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
  userName: null,
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
  const [[isUserNameLoading, userName], setUserName] =
    useStorageState("userName");

  const signIn = (data: {
    data: { jwt: string; user: { username: string } };
  }) => {
    setSession(data.data.jwt);
    setUserName(data.data.user.username);
    router.replace("/(app)/(tabs)");
  };

  const signOut = () => {
    setSession(null);
  };

  const value = {
    signIn,
    signOut,
    session,
    isUserNameLoading,
    userName,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
