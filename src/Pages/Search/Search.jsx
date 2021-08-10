import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

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

import { joinClassesWithSpace } from "../../Helpers/helperFunctions";

import { addSearchResults } from "../../redux/countries/countriesSlice";
import {
  changeChoosenRegionName,
  resetChoosenRegionName,
  changeSearchString,
  resetSearchString,
} from "../../redux/user/userSlice";

import { getCountriesWithName } from "../../services/services";

import classes from "./Search.module.scss";

const Search = ({ match, history }) => {
  const {
    params: { searchString },
  } = match;

  const dispatch = useDispatch();

  const stateSearchResultsCountries = useSelector(
    (state) => state.countries.searchResults
  );
  const stateUserChoosenRegion = useSelector(
    (state) => state.user.choosenRegion
  );
  const stateUserSearchString = useSelector((state) => state.user.searchString);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(resetChoosenRegionName());
    history.push(`/search/${stateUserSearchString}`);
  };
  const onResetHandler = (e) => {
    dispatch(resetSearchString());
    dispatch(resetChoosenRegionName());
    history.push(`/`);
  };
  const onInputChange = (e) => dispatch(changeSearchString(e.target.value));

  const regions = [
    "Filter by Region",
    ...Object.keys(
      Object.keys(stateSearchResultsCountries).reduce(
        (s, key) =>
          stateSearchResultsCountries[key].region
            ? {
                ...s,
                [stateSearchResultsCountries[key].region]:
                  stateSearchResultsCountries[key].region,
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
    stateUserChoosenRegion === "Filter by Region"
      ? stateSearchResultsCountries
      : Object.keys(stateSearchResultsCountries).reduce(
          (s, key) =>
            stateSearchResultsCountries[key].region === stateUserChoosenRegion
              ? { ...s, [key]: stateSearchResultsCountries[key] }
              : s,
          {}
        );

  const fetchSearchResults = async (dispatch, searchString) => {
    try {
      if (searchString.trim().length !== 0) {
        const response = await getCountriesWithName(searchString);
        const { data } = response;
        dispatch(
          addSearchResults(
            data.reduce((s, c) => ({ ...s, [c.alpha3Code]: c }), {})
          )
        );
      }
    } catch (error) {
      console.error(error);
      dispatch(addSearchResults({}));
    }
  };

  useEffect(() => {
    fetchSearchResults(dispatch, searchString);
  }, [dispatch, searchString]);

  return (
    <FulscrnWrpr
      className={classes.Search}
      containerClassName={classes.container}
    >
      <div className={classes.topRow}>
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
          className={joinClassesWithSpace(classes.filterSelect, "input")}
          name={"regions"}
          value={
            findSelectValue(regionsSelectData, stateUserChoosenRegion) || ""
          }
          onChange={selectRegionHandler}
          options={regionsSelectData}
          // indicatorComponent={PageNextArrowThin}
        />
      </div>
      <div className={classes.row}>
        <button
          className={joinClassesWithSpace(classes.home, "element")}
          onClick={() => {
            history.push("/");
          }}
        >
          <FontAwesomeIcon icon={faHome} />
        </button>
        <h2>Search results for "{searchString}"</h2>
      </div>
      {Object.keys(filteredCountries).length > 0 ? (
        <div className={classes.cardsContainer}>
          {Object.keys(filteredCountries).map((key) => (
            <CountryCard country={filteredCountries[key]} key={key} />
          ))}
        </div>
      ) : (
        <div className={classes.row}>
          <h3>No results found !</h3>
        </div>
      )}
    </FulscrnWrpr>
  );
};
export default withRouter(Search);
