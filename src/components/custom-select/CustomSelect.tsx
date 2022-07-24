import { IOption } from "../../types/types";
import Select from "react-select";
import { customStyles } from "./styles";
import { useState } from "react";

const options: IOption[] = [
  {
    value: 10,
    label: "10%",
  },
  {
    value: 15,
    label: "15%",
  },
  {
    value: 20,
    label: "20%",
  },
];

export const CustomSelect = () => {
  const [choice, setChoice] = useState(10);

  const getValue = (): IOption | undefined | "" => {
    return choice ? options.find((option) => option.value === choice) : "";
  };

  const onChange = (newValue: any): void => {
    setChoice(newValue.value);
  };

  return <Select onChange={onChange} value={getValue()} options={options} styles={customStyles} isSearchable={false} />;
};
