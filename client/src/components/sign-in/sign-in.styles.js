import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  font-size: 22px;

  @media screen and (max-width: 568px) {
    width: unset;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 568px) {
    flex-direction: column;
  }
`;
