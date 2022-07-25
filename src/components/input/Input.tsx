import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ placeholder, value, onChange }: IProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={({ target }) => onChange(target.value)}
      type="number"
    />
  );
};
