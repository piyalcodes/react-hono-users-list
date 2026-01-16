import { useMemo, type PropsWithChildren } from "react";
import { UserContext } from "./user.context";
import { useUsers } from "../hooks/useUsers";

export function UserProvider({ children }: PropsWithChildren) {
  const userData = useUsers();
  const usersList = useMemo(() => userData.data || [], [userData.data]);

  const userContextValue = {
    setUsers: () => [],
    users: usersList,
  };
  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
