import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import Searchbar from "../../Components/Searchbar/Searchbar";
import CountryCard from "../../Components/CountryCard/CountryCard";
import StyledReactSelect, {
  findSelectValue,
  generateListFromArray,
} from "../../Components/StyledReactSelect/StyledReactSelect";
import {
  customTheme,
  getCustomStyles,
} from "../../Components/StyledReactSelect/reactSelectConfig";

import {
  changeChoosenRegionName,
  changeSearchString,
  resetSearchString,
} from "../../redux/user/userSlice";

import classes from "./Home.module.scss";

const Home = ({ history }) => {
  const dispatch = useDispatch();

  const stateAllCountries = useSelector((state) => state.countries.all);
  const stateUserChoosenRegion = useSelector(
    (state) => state.user.choosenRegion
  );
  const stateUserSearchString = useSelector((state) => state.user.searchString);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    history.push(`/search/${stateUserSearchString}`);
  };
  const onResetHandler = (e) => {
    dispatch(resetSearchString());
    history.push(`/`);
  };
  const onInputChange = (e) => dispatch(changeSearchString(e.target.value));

  const regions = [
    "All",
    ...Object.keys(
      Object.keys(stateAllCountries).reduce(
        (s, key) =>
          stateAllCountries[key].region
            ? {
                ...s,
                [stateAllCountries[key].region]: stateAllCountries[key].region,
              }
            : s,
        {}
      )
    ),
  ];
  const regionsSelectData = generateListFromArray(regions, (region) => region);
  const selectRegionHandler = (choice) => {
    dispatch(changeChoosenRegionName(choice.value));
  };

  const filteredCountries =
    stateUserChoosenRegion === "All"
      ? stateAllCountries
      : Object.keys(stateAllCountries).reduce(
          (s, key) =>
            stateAllCountries[key].region === stateUserChoosenRegion
              ? { ...s, [key]: stateAllCountries[key] }
              : s,
          {}
        );

  return (
    <FulscrnWrpr
      className={classes.Home}
      containerClassName={classes.container}
    >
      <div className={classes.row}>
        <Searchbar
          onSubmitHandler={onSubmitHandler}
          onResetHandler={onResetHandler}
          onInputChange={onInputChange}
          inputPlaceholder="Search for a country..."
          inputValue={stateUserSearchString}
        />
        <StyledReactSelect
          customTheme={customTheme}
          customStyles={getCustomStyles(true)}
          // className={styles.sortSelect}
          name={"regions"}
          value={
            findSelectValue(regionsSelectData, stateUserChoosenRegion) || ""
          }
          onChange={selectRegionHandler}
          options={regionsSelectData}
          // indicatorComponent={PageNextArrowThin}
        />
      </div>
      <div className={classes.cardsContainer}>
        {Object.keys(filteredCountries).map((key) => (
          <CountryCard country={filteredCountries[key]} key={key} />
        ))}
      </div>
    </FulscrnWrpr>
  );
};
export default withRouter(Home);
