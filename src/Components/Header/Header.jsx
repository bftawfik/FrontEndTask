import { useSelector, useDispatch } from "react-redux";

import FulscrnWrpr from "../FulscrnWrpr/FulscrnWrpr";

import { changeThemeName } from "../../redux/user/userSlice";

import classes from "./Header.module.scss";

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
      </div>

      {themesList
        .filter((theme) => theme !== userTheme)
        .map((theme, ndx) => (
          <button key={ndx} onClick={(e) => dispatch(changeThemeName(theme))}>
            {theme}
          </button>
        ))}
    </FulscrnWrpr>
  );
};
export default Header;
