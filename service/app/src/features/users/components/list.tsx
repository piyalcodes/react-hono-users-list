import { useUserContext } from "../providers/user.context";
import type { User } from "../types/users";

export function List() {
  const { users } = useUserContext();

  return (
    <div className="w-[100vw]">
      <div className="border-2 rounded-md w-[200px] m-auto ">
        <ul className="list-none p-4">
          {users && users.map((user: User) => <li>{user.name}</li>)}
        </ul>
      </div>
    </div>
  );
}
