import { api } from "../../../services/api";
import type { Users } from "../types/users";

export const UserService = {
  getUserList: () => api.get<Users>("/users"),
};
