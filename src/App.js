import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Country from "./Pages/Country/Country";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

import Header from "./Components/Header/Header";

import { addAllCountries } from "./redux/countries/countriesSlice";
import { getAllCountries } from "./services/services";

import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const stateUserTheme = useSelector((state) => state.user.theme);
  const stateAllCountries = useSelector((state) => state.countries.all);
  
  const fetchUserLocation = async (dispatch, stateAllCountries) => {
    try {
      const response = await getAllCountries();
      const { data } = response;
      if (stateAllCountries.length === 0) {
        dispatch(addAllCountries(data));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.documentElement.className = "";
    document.documentElement.classList.add(`theme-${stateUserTheme}`);
  }, [stateUserTheme]);

  useEffect(() => {
    fetchUserLocation(dispatch, stateAllCountries);
  }, [dispatch, stateAllCountries]);

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/country/:id">
            <Country />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
