import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 10px 0;
  font-size: 22px;
  align-items: center;

  @media screen and (max-width: 700px) {
    font-size: inherit;
  }
`;

export const ImageContainer = styled.div`
  width: 20%;
  padding-right: 20px;
  margin-right: 18px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 700px) {
    width: 18%;
    padding-right: 10px;
    margin-right: 18px;
  }

  @media screen and (max-width: 600px) {
    margin-right: 14px;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
  margin-right: 16px;
  font-size: 24px;

  @media screen and (max-width: 1000px) {
    margin-right: 12px;
  }

  @media screen and (max-width: 800px) {
    margin-right: 8px;
  }

  @media screen and (max-width: 700px) {
    font-size: inherit;
    margin-right: 4px;
  }

  @media screen and (max-width: 500px) {
    margin-right: 2px;
  }

  @media screen and (max-width: 420px) {
    width: 20%;
    margin-right: 8px;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  margin-right: 0px;

  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    margin-right: 4px;
  }

  @media screen and (max-width: 700px) {
    margin-right: 0px;
  }

  @media screen and (max-width: 420px) {
    margin-right: 15px;
  }

  @media screen and (max-width: 380px) {
    margin-right: 12px;
  }
`;

export const RemoveButtonContainer = styled.div`
  cursor: pointer;

  @media screen and (max-width: 420px) {
    padding-left: 2px;
  }
`;
