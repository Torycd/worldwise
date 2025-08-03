import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";

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
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
