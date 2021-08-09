import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const Country = ({ match }) => {
  const {
    params: { id },
  } = match;
  const stateAllCountries = useSelector((state) => state.countries.all);
  return <div>{stateAllCountries[id].name}</div>;
};
export default withRouter(Country);
