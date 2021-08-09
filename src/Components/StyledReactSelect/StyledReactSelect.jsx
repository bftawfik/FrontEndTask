import React from "react";
/* modules */

import Select, { components } from "react-select";

const generateListFromArray = (itemsArr, labelFunction) =>
  itemsArr.map((item) => ({
    value: item,
    label: labelFunction(item),
  }));

const findSelectValue = (options, label) =>
  options.find((option) => option.label === label);

const DropdownIndicator = (IndicatorComponent) => (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <IndicatorComponent />
      </components.DropdownIndicator>
    )
  );
};

const StyledReactSelect = ({
  customTheme,
  customStyles,
  indicatorComponent,
  ...props
}) => {
  const getTheme = (customTheme) => (theme) =>
    customTheme
      ? {
          ...theme,
          borderRadius: customTheme.borderRadius,
          colors: {
            ...theme.colors,
            ...customTheme.colors,
          },
        }
      : theme;
  const styleFunction = (customStyle) => (provided, state) => ({
    ...provided,
    ...customStyle,
  });

  const getStyles = (customStyles) =>
    Object.entries(customStyles).reduce(
      (startVal, [key, value]) => ({
        ...startVal,
        [key]: styleFunction(value),
      }),
      {}
    );
  return (
    <Select
      {...props}
      theme={getTheme(customTheme)}
      styles={getStyles(customStyles)}
      components={
        indicatorComponent && {
          DropdownIndicator: DropdownIndicator(indicatorComponent),
        }
      }
    />
  );
};

export { generateListFromArray, findSelectValue, StyledReactSelect as default };
