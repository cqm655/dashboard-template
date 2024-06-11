import ErrorPage from "../pages/error/error";
import Root from "../pages/root/root";
import { useContext } from "react";
import { AuthContext } from "../hooks/useAuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/login/login";
import Users from "../pages/users/users";

// const PrivateRoutes = () => {
//   const { authenticated } = useContext(AuthContext);
//
//   if (!authenticated) return <Navigate to="/login" replace />;
//   return <Outlet />;
// };

const AppRoutes = [
  {
    path: "/",
    // element: <PrivateRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
        children: [
          {
            path: "/users",
            element: <Users />,
          },
        ],
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
];

export default AppRoutes;
