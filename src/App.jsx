import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import MainPage from "./pages/MainPage";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "app",
          element: <AppLayout />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
