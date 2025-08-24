import { useState, useEffect } from "react";
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
import CountriesList from "./components/CountryList";
import City from "./components/City";
// import { useEffect } from "react";

const BASE_URL = "http://localhost:9000";
function App() {
  const [cities, setCities] = useState([]);
  const [Isloading, setIsLoading] = useState(false);

  // console.log(cities);
  useEffect(() => {
    const handleCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        setIsLoading(false);
      } catch {
        alert("There was an effort");
      } finally {
        setIsLoading(false);
      }
    };
    handleCities();
  }, []);

  const router = createBrowserRouter([
    {
      path: "",
      element: <MainPage />,
      children: [
        {
          path: "",
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
              element: <CityList cities={cities} Isloading={Isloading} />,
            },
            {
              path:'cities/:id', element: <City />
            },
            {
              path: "countries",
              element: <CountriesList cities={cities} Isloading={Isloading} />,
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
