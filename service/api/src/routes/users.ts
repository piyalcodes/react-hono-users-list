import { Hono } from "hono";
import { users } from "../data/users";

const usersRoute = new Hono();

usersRoute.get("/", (c) => {
  return c.json(users);
});

export default usersRoute;
