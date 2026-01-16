import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routers.tsx";
import { UserProvider } from "./features/users/providers/user.provder.tsx";
import { QueryProvider } from "./providers/query.provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </QueryProvider>
  </StrictMode>
);
