import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Molde from "./pages/Humanidade/index.tsx";
import { Humanidades } from "./pages/Humanidades/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/molde",
    element: <Molde/>
  },
  {
    path: "/humanidades",
    element: <Humanidades/>
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
