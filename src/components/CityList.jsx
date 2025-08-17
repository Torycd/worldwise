import styles from "./CityList.module.css";
import Spinner from "./Spinner";

function CityList({ cities, Isloading }) {
  if (Isloading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityList key={city.id} city={city}/>
      ))}
    </ul>
  );
}

export default CityList;
