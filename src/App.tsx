import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/login";
import "./index.css";
import ErrorPage from "./pages/error/error";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
