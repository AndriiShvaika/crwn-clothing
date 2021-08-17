import styled from "styled-components";

import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIconSVG)`
  width: 32px;
  height: 32px;

  @media screen and (max-width: 800px) {
    width: 30px;
    margin-top: 2px;
  }

  @media screen and (max-width: 560px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    width: 28px;
  }
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  bottom: 9px;

  @media screen and (max-width: 800px) {
    bottom: 8px;
  }

  @media screen and (max-width: 560px) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 1px;
    margin-bottom: 11px;
  }
`;
