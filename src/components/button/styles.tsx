import styled from "styled-components";

export const StyledButton = styled.button<{disabled: boolean}>`
    height: 61px;
    border: 0;
    background-color: #2ED2C9;
    font-size: 24px;
    color: #FFFFFF;
    cursor: pointer;
    opacity: ${({ disabled }) => ( disabled ? '0.5' : '1' )};
`
