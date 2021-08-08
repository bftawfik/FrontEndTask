import FulscrnWrpr from "../FulscrnWrpr/FulscrnWrpr";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <FulscrnWrpr className={classes.Header} containerClassName={classes.container}>
      <div className={classes.row}>
        <h1 className={classes.title}>Where in the world?</h1>
      </div>
    </FulscrnWrpr>
  );
};
export default Header;
