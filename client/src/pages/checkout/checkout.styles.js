import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    max-width: 720px;
    padding: 0 15px;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  font-size: 22px;

  @media screen and (max-width: 700px) {
    font-size: inherit;
  }
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 700px) {
    width: 22%;

    &:last-child {
      width: 12%;
    }
  }

  @media screen and (max-width: 380px) {
    &:nth-child(2) {
      margin-right: 6px;
    }
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 700px) {
    font-size: inherit;
  }
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: -10px;
  font-size: 28px;
  color: red;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;
