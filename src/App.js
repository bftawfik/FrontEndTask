import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Country from "./Pages/Country/Country";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

import Header from "./Components/Header/Header";

import "./App.scss";

function App() {
  const userTheme = useSelector((state) => state.user.theme);

  useEffect(() => {
    document.documentElement.className = "";
    document.documentElement.classList.add(`theme-${userTheme}`);
  }, [userTheme]);

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
