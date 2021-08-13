import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin: 60px auto;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 80px;
    }
  }
`;
