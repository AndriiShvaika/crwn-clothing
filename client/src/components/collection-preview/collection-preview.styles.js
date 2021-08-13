import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin-bottom: 30px;
  margin: 0 auto;
`;

export const TitleContainer = styled.h1`
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 27px;
  margin: 0 auto;

  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1000px) {
    grid-gap: 15px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;
