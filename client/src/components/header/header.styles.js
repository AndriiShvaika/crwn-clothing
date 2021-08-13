import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding-right: 10px;
  margin-bottom: 20px;
  font-size: 22px;

  @media screen and (max-width: 800px) {
    height: 60px;
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 15px;

  @media screen and (max-width: 800px) {
    svg {
      width: 50px;
    }
  }

  @media screen and (max-width: 480px) {
    svg {
      width: 40px;
    }
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;

  @media screen and (max-width: 800px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 0 15px;
  margin-top: 4px;
  margin-right: 4px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding: 0 10px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 5px;
    margin-top: 6px;
  }
`;
