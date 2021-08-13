import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1214px;
  margin: 0 auto;

  @media screen and (max-width: 1214px) {
    width: auto;
  }
`;

export const HomePageTitle = styled.h1`
  font-weight: bold;
  font-size: 38px;
  margin: 0 auto 30px;
  text-transform: uppercase;
`;
