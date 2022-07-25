import { StyledButton } from "./styles";

interface IProps {
  onClick: () => void;
  disabled: boolean;
}

export const Button = ({ onClick, disabled }: IProps) => {
  return (
    <StyledButton
      onClick={({ target }: React.MouseEvent<HTMLButtonElement>): void => onClick()}
      type="button"
      disabled={disabled}
    >
      {" "}
      Ohhhoooo 🍻{" "}
    </StyledButton>
  );
};
