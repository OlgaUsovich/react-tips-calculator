import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, value, onChange }: IProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type="number"
    />
  );
};
