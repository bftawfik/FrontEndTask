const borderRadius = 5;
const customTheme = {
  borderRadius: borderRadius,
  colors: {
    primary: "transparent",
    primary25: "transparent",
  },
};

const getCustomStyles = () => ({
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
    margin: 0,
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
});

export { customTheme, getCustomStyles };
