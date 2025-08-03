import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "product",
      element: <Product />,
    },
    {
      path: "pricing",
      element: <Pricing />,
    },
    {
      path: "*",
      element: "",
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
