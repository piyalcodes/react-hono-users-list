import { Hono } from "hono";
import { serve } from "@hono/node-server";
import usersRoute from "./routes/users";

const app = new Hono();

app.get("/", (c) => c.text("Hono API is running"));

app.route("/users", usersRoute);

serve({
  fetch: app.fetch,
  port: 3010,
});
