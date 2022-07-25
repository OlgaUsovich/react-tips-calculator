import styled from "styled-components";

export const StyledButton = styled.button`
    height: 61px;
    border: 0;
    background-color: #2ED2C9;
    font-size: 24px;
    color: #FFFFFF;
    cursor: pointer;

    &:disabled,
    &[disabled]{
        opacity: 50%;
        cursor: default;
}
`