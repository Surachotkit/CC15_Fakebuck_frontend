import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import FriendPage from "../pages/FriendPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    // ใช้ header ร่วมกัน ถ้าตามด้วย / เอา homepage  มาแทน Outlet
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "friend", element: <FriendPage /> },
      { path: "profile/:profileId", element: <ProfilePage /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
