import { useQuery } from "@tanstack/react-query";
import { UserService } from "../services/users.service";

export function useUsers() {
  return useQuery({
    queryFn: () => UserService.getUserList(),
    queryKey: ["users"],
  });
}
