import { createBrowserRouter } from "react-router";
import LoginPage from "./features/auth/page/LoginPage";
import RegisterPage from "./features/auth/page/RegisterPage";
import Feed from "./features/auth/page/Feed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
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
