import { useSelector } from "react-redux";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import CountryCard from "../../Components/CountryCard/CountryCard";

import classes from "./Home.module.scss";

const Home = () => {
  const stateAllCountries = useSelector((state) => state.countries.all);
  console.log(stateAllCountries);

  return (
    <FulscrnWrpr
      className={classes.Home}
      containerClassName={classes.container}
    >
      <div className={classes.cardsContainer}>
        {stateAllCountries.map((country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </FulscrnWrpr>
  );
};
export default Home;
