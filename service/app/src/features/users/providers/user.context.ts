import { createContext, useContext } from "react";
import type { User } from "../types/users";

export type UserContext = {
  setUsers: () => void;
  users: User[] | [] | null;
};

export function useUserContext() {
  const ctx = useContext(UserContext);

  if (!ctx) {
    throw new Error("useUserContext must be inside a provider");
  }
  return ctx;
}

export const UserContext = createContext<UserContext | null>(null);
