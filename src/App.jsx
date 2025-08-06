import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import MainPage from "./pages/MainPage";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect } from "react";

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const handleCities = async () => {
      try {
        const res = await fetch("")
      } catch (err) {
        cities(err.message);
      }
    };
  }, []);

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
          children: [
            {
              index: true,
              element: <Navigate to="cities" replace />,
            },
            {
              path: "cities",
              element: <CityList />,
            },
            {
              path: "countries",
              element: <p>Countries</p>,
            },
            {
              path: "form",
              element: <p>Form</p>,
            },
          ],
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
