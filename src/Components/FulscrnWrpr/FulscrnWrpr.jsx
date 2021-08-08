import React from "react";

import { joinClassesWithSpace } from "../../Helpers/helperFunctions";

import * as defaultStyles from "./FulscrnWrpr.module.scss";

const FulscrnWrpr = ({ children, className, containerClassName, style }) => {
  const styles = defaultStyles;

  return (
    <div
      className={joinClassesWithSpace(styles.FulscrnWrpr, className)}
      style={style}
    >
      <div
        className={joinClassesWithSpace(styles.container, containerClassName)}
      >
        {children}
      </div>
    </div>
  );
};

export default FulscrnWrpr;
