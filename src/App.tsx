import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppRoutes from "./app-routes/app-routes";

const router = createBrowserRouter(AppRoutes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
