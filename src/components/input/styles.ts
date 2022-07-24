import styled from "styled-components";

export const StyledInput = styled.input`
    border: 0;
    border-radius: 30px;
    height: 68px;
    color: rgba(117, 108, 108, 0.6);
    font-size: 18px;
    text-align: center;

    &:focus-visible {
        outline-color: rgba(117, 108, 108, 0.57);
    }
`