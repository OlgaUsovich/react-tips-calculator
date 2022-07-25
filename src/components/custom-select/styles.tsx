import { ControlProps, CSSObjectWithLabel, GroupBase, StylesConfig } from "react-select";

export const customStyles: StylesConfig = {
  control: (styles: CSSObjectWithLabel, state: ControlProps<unknown, boolean, GroupBase<unknown>>) => ({
    ...styles,
    borderRadius: "30px",
    height: "68px",
    textAlign: "center",
    color: "#756C6C",
    border: state.isFocused ? "2px solid rgba(117, 108, 108, 0.57)" : 0,

    "&:hover": {
      border: state.isFocused ? "2px solid rgba(117, 108, 108, 0.57)" : 0,
    },
  }),

  input: (styles: CSSObjectWithLabel) => ({
    ...styles,
    color: "#756C6C",
    fontSize: "18px",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: (styles: CSSObjectWithLabel) => ({
    ...styles,
    color: "#756C6C",
    // width: '22px',
    // heigth: '10px',
  }),
};
