const primaryColor = "#542E90";
const primaryColor25 = "##946ED0";
const borderRadius = 10;
const border = "1px solid #D9D9D9";
/* customTheme = {
  borderRadius: number,
  colors: {
    text: string;
    textLight: string;
    primary: string;
    primary75: string;
    primary50: string;
    primary25: string;
    danger: string;
    dangerLight: string;

    neutral0: string;
    neutral1: string;
    neutral2: string;
    neutral3: string;
    neutral4: string;
    neutral5: string;
    neutral10: string;
    neutral20: string;
    neutral30: string;
    neutral40: string;
    neutral50: string;
    neutral60: string;
    neutral70: string;
    neutral80: string;
    neutral90: string;
    neutral100: string;

    neutral1a: string;
    neutral2a: string;
    neutral3a: string;
    neutral4a: string;
    neutral5a: string;
    neutral10a: string;
    neutral20a: string;
    neutral30a: string;
    neutral40a: string;
    neutral50a: string;
    neutral60a: string;
    neutral70a: string;
    neutral80a: string;
    neutral90a: string;
  }
}; */
const customTheme = {
  borderRadius: borderRadius,
  colors: {
    primary: primaryColor,
    primary25: primaryColor25,
  },
};

const getCustomStyles = (mobile) =>
  mobile
    ? {
        control: {
          borderRadius: borderRadius,
          boxShadow: "none",
          border: border,
          padding: "2px 0",
          backgroundColor: "#F5F5F5",
          minHeight: "32px",
          height: "32px",
        },
        indicatorSeparator: {
          display: "none",
        },
        dropdownIndicator: {
          color: primaryColor,
          width: "24px",
          transform: "rotate(90deg)",
        },
        menu: {
          color: primaryColor,
        },
        input: {
          color: primaryColor,
          height: "22px",
          margin: "0",
          padding: "0"
        },
        singleValue: {
          color: primaryColor,
          fontWeight: "bold",
          fontSize: "9.5px",
          textTransform: "uppercase",
        },
        valueContainer: {
          height: "26px",
        },
      }
    : {
        control: {
          borderRadius: borderRadius,
          boxShadow: "none",
          border: border,
          padding: "2px 0",
          backgroundColor: "#F5F5F5",
        },
        indicatorSeparator: {
          display: "none",
        },
        dropdownIndicator: {
          color: primaryColor,
          width: "28px",
          transform: "rotate(90deg)",
        },
        menu: {
          color: primaryColor,
        },
        input: {
          color: primaryColor,
        },
        singleValue: {
          color: primaryColor,
          fontWeight: "bold",
          textTransform: "uppercase",
        },
      };

export { customTheme, getCustomStyles };
