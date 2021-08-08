import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

import FulscrnWrpr from "../FulscrnWrpr/FulscrnWrpr";

import { changeThemeName } from "../../redux/user/userSlice";

import classes from "./Header.module.scss";

const icons = { light: faSun, dark: faMoon };

const Header = () => {
  const dispatch = useDispatch();
  const themesList = useSelector((state) => state.theme.list);
  const userTheme = useSelector((state) => state.user.theme);

  return (
    <FulscrnWrpr
      className={classes.Header}
      containerClassName={classes.container}
    >
      <div className={classes.row}>
        <h1 className={classes.title}>Where in the world?</h1>
        {themesList
          .filter(({ value: themeValue }) => themeValue !== userTheme)
          .map((theme, ndx) => (
            <button
              key={ndx}
              onClick={(e) => dispatch(changeThemeName(theme.value))}
              className={classes.toggle}
            >
              <FontAwesomeIcon icon={icons[theme.value]} />
              {theme.label}
            </button>
          ))}
      </div>
    </FulscrnWrpr>
  );
};
export default Header;
