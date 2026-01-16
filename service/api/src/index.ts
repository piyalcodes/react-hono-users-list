import { Hono } from "hono";
import { serve } from "@hono/node-server";
import usersRoute from "./routes/users";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (c) => c.text("Hono API is running"));

app.route("/users", usersRoute);

serve({
  fetch: app.fetch,
  port: 3010,
});
