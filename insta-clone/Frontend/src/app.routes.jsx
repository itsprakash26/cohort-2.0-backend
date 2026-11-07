import { createBrowserRouter } from "react-router";
import LoginPage from "./features/auth/page/LoginPage";
import RegisterPage from "./features/auth/page/RegisterPage";
import HomePage from "./features/auth/page/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/Register",
    element: <RegisterPage />,
  },
]);
