import { useSelector } from "react-redux";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import CountryCard from "../../Components/CountryCard/CountryCard";

import classes from "./Home.module.scss";

const Home = () => {
  const stateAllCountries = useSelector((state) => state.countries.all);
  const regions = Object.keys(
    Object.keys(stateAllCountries).reduce(
      (s, key) => ({
        ...s,
        [stateAllCountries[key].region]: stateAllCountries[key].region,
      }),
      {}
    )
  );
  console.log(regions);

  return (
    <FulscrnWrpr
      className={classes.Home}
      containerClassName={classes.container}
    >
      <div className={classes.cardsContainer}>
        {Object.keys(stateAllCountries).map((key) => (
          <CountryCard country={stateAllCountries[key]} key={key} />
        ))}
      </div>
    </FulscrnWrpr>
  );
};
export default Home;
