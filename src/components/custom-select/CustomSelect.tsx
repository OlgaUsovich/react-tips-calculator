import { IOption } from "../../types/types";
import Select from "react-select";
import { customStyles } from "./styles";

interface IProps {
  onChange: (newValue: any) => void; // ???? тип
  value: IOption | undefined | "";
  options: IOption[];
}

export const CustomSelect = ({ onChange, value, options }: IProps) => {
  return <Select onChange={onChange} value={value} options={options} styles={customStyles} isSearchable={false} />;
};
