import ErrorPage from "../pages/error/error";
import Root from "../pages/root/root";

const AppRoutes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
];

export default AppRoutes;
