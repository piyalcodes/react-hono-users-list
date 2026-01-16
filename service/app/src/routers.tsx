import { createBrowserRouter } from "react-router-dom";
import { Users } from "./features/users/pages";

export const router = createBrowserRouter([
  { path: "/users", element: <Users /> },
]);
