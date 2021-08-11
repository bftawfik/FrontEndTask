import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

import FulscrnWrpr from "../FulscrnWrpr/FulscrnWrpr";

import { joinClassesWithSpace } from "../../Helpers/helperFunctions";

import { changeThemeName } from "../../redux/user/userSlice";

import classes from "./Header.module.scss";
import { Link } from "react-router-dom";

const icons = { light: faSun, dark: faMoon };

const Header = () => {
  const dispatch = useDispatch();
  const stateThemesList = useSelector((state) => state.theme.list);
  const stateUserTheme = useSelector((state) => state.user.theme);

  return (
    <FulscrnWrpr
      className={joinClassesWithSpace(classes.Header, "element")}
      containerClassName={classes.container}
    >
      <div className={classes.row}>
        <Link to="/">
          <h1 className={classes.title}>Where in the world?</h1>
        </Link>
        {stateThemesList
          .filter(({ value: themeValue }) => themeValue !== stateUserTheme)
          .map((theme, ndx) => (
            <button
              key={ndx}
              onClick={(e) => dispatch(changeThemeName(theme.value))}
              className={classes.toggle}
            >
              <FontAwesomeIcon icon={icons[theme.value]} />
              <span>{theme.label}</span>
            </button>
          ))}
      </div>
    </FulscrnWrpr>
  );
};
export default Header;
