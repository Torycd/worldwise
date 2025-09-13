import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { CitiesProvider } from "./context/CitiesContext";

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
import Form from "./components/Form";
// import { useEffect } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <CitiesProvider>
          <MainPage />
        </CitiesProvider>
      ),
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
              element: <CityList />,
            },
            {
              path: "cities/:id",
              element: <City />,
            },
            {
              path: "countries",
              element: <CountriesList />,
            },
            {
              path: "form",
              element: <Form />,
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
