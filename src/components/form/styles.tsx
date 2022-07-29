import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 331px;
  margin: 10px;

  @media screen and (min-width: 414.99px) {
    gap: 17px;
  }

  @media screen and (min-width: 744.99px) {
    max-width: 456px;
    gap: 33px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-align: center;

  @media screen and (min-width: 414.99px) {
    margin: 0 0 14px 0;
  }

  @media screen and (min-width: 744.99px) {
    font-size: 40px;
    margin: 0 0 6px 0;
  }
`;

export const Subtitle = styled.h2`
  margin: 15px 0 30px 0;
  color: rgba(117, 108, 108, 0.57);
  text-align: center;
  font-family: "Roboto", "sans-serif";
  font-size: 24px;
  font-weight: 400;

  @media screen and (min-width: 414.99px) {
    font-size: 24px;
    margin: 14px 0 28px 0;
  }

  @media screen and (min-width: 744.99px) {
    font-size: 32px;
    margin: 6px 0 12px 0;
  }
`;

export const Total = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 15px 0;

  @media screen and (min-width: 414.99px) {
    font-size: 24px;
    margin: 14px 0;
  }

  @media screen and (min-width: 744.99px) {
    margin: 12px 0;
  }
`;
