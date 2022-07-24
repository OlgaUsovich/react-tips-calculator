import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans', 'sans-serif';
    font-weight: 400;
  }

  body {
    background-color: #EAF2F2;
    margin: 0;
  }
`;

export const FormContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleTop = styled.div`
  position: absolute;
  top: -108px;
  width: 250px;
  height: 250px;
  background-color: rgba(133, 211, 202, 0.31);
  border-radius: 50%;
`;

export const CircleLeft = styled(CircleTop)`
  left: -89px;
  top: -53px;
`;
