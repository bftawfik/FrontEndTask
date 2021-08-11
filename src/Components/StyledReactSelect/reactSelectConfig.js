const borderRadius = 5;
const customTheme = {
  borderRadius: borderRadius,
  colors: {
    primary: "transparent",
    primary25: "transparent",
  },
};

const getCustomStyles = (flag) =>
  flag
    ? {
        control: {
          backgroundColor: "transparent",
          border: 0,
          overflow: "hidden",
        },
        indicatorSeparator: {
          display: "none",
        },
        dropdownIndicator: {
          width: "96px",
          padding: "10px 37px",
        },
        menu: {
          fontSize: "14px",
          fontWeight: "bold",
          margin: "8px 0 0 0",
          padding: "22px 0",
          color: "inherit",
          backgroundColor: "inherit",
          borderRadius: "10px",
        },
        option: {
          padding: "4px 46px 9px",
          color: "inherit",
          fontSize: "26px",
          fontWeight: "normal"
        },
        singleValue: {
          fontWeight: "bold",
          fontSize: "23px",
          padding: "10px 37px",
          backgroundColor: "transparent",
          color: "inherit",
        },
        valueContainer: {
          height: "96px",
        },
      }
    : {
        control: {
          backgroundColor: "transparent",
          border: 0,
          overflow: "hidden",
        },
        indicatorSeparator: {
          display: "none",
        },
        dropdownIndicator: {
          width: "46px",
          padding: "10px 15px",
        },
        menu: {
          fontSize: "14px",
          fontWeight: "bold",
          margin: "5px 0 0 0",
          padding: "10px 0",
          color: "inherit",
          backgroundColor: "inherit",
        },
        option: {
          padding: "4px 24px 5px",
          color: "inherit",
        },
        singleValue: {
          fontWeight: "bold",
          fontSize: "13px",
          padding: "10px 13px",
          backgroundColor: "transparent",
          color: "inherit",
        },
        valueContainer: {
          height: "56px",
        },
      };

export { customTheme, getCustomStyles };
