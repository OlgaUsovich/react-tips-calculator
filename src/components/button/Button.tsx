import { StyledButton } from "./styles"

interface IProps {
    onClick: () => void;
}

export const Button = ({onClick}: IProps) => {
    return <StyledButton onClick={({ target }) => onClick( ) } type='button'> Ohhhoooo 🍻 </StyledButton>
}

