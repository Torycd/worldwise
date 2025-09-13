import { createContext, useContext, useState, useEffect } from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();
function CitiesProvider({ children }) {
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

  return (
    <CitiesContext.Provider
      value={{
        cities,
        Isloading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}


function usePost() {
  const context = useContext(CitiesProvider);
  return context;
}

export { CitiesProvider, usePost };

// CitiesProvider.propTypes = {
//   children: PropTypes.node,
// };
