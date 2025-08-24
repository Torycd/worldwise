import CityItem from "./CityItem";
import Message from "./Message";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";

function CountriesList() {
  //   if (Isloading) return <Spinner />;
  //   if (!cities)
  //     return (
  //       <Message message="Add your furst city by clicking on the city on the map" />
  //     );
  return (
    <ul className={styles.countriesList}>
      {/* {[].map((city) => (
        // <CityItem key={city.id} city={city} />
      ))} */}
    </ul>
  );
}

export default CountriesList;
