import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import CountryDetails from "../../Components/CountryDetails/CountryDetails";

import { joinClassesWithSpace } from "../../Helpers/helperFunctions";

import classes from "./Country.module.scss";

const Country = ({ match, history }) => {
  const {
    params: { id },
  } = match;
  const stateAllCountries = useSelector((state) => state.countries.all);
  return (
    <FulscrnWrpr
      className={classes.Country}
      containerClassName={classes.container}
    >
      <div className={classes.row}>
        <button
          className={joinClassesWithSpace(classes.home, "element")}
          onClick={() => {
            history.push("/");
          }}
        >
          <FontAwesomeIcon icon={faHome} />
        </button>
        <button
          className={joinClassesWithSpace(classes.back, "element")}
          onClick={() => {
            history.goBack();
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>back</span>
        </button>
      </div>
      <CountryDetails
        country={stateAllCountries[id]}
        allCountries={stateAllCountries}
      />
    </FulscrnWrpr>
  );
};
export default withRouter(Country);
