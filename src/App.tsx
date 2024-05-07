import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import "./index.css";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
