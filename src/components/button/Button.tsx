import { StyledButton } from "./styles"

interface IProps {
    onClick: () => void;
    disabled: boolean;
}

export const Button = ({onClick, disabled}: IProps) => {
    return <StyledButton onClick={({ target }) => onClick( ) } type='button' disabled={ disabled }> Ohhhoooo 🍻 </StyledButton>
}

