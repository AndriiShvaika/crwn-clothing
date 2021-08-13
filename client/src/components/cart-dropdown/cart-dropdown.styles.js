import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 380px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  margin-left: 940px;
  z-index: 5;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 1280px) {
    margin-left: 920px;
  }

  @media screen and (max-width: 1240px) {
    margin-left: 880px;
  }

  @media screen and (max-width: 1200px) {
    margin-left: 840px;
  }

  @media screen and (max-width: 1160px) {
    margin-left: 800px;
  }

  @media screen and (max-width: 1120px) {
    margin-left: 760px;
  }

  @media screen and (max-width: 1080px) {
    margin-left: 720px;
  }

  @media screen and (max-width: 1040px) {
    margin-left: 680px;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 640px;
  }

  @media screen and (max-width: 960px) {
    margin-left: 600px;
  }

  @media screen and (max-width: 920px) {
    margin-left: 560px;
  }

  @media screen and (max-width: 880px) {
    margin-left: 520px;
  }

  @media screen and (max-width: 840px) {
    margin-left: 480px;
  }

  @media screen and (max-width: 800px) {
    margin-left: 500px;
    width: 260px;
    height: 380px;
  }

  @media screen and (max-width: 790px) {
    margin-left: 480px;
  }

  @media screen and (max-width: 770px) {
    margin-left: 460px;
  }

  @media screen and (max-width: 750px) {
    margin-left: 440px;
  }

  @media screen and (max-width: 730px) {
    margin-left: 420px;
  }

  @media screen and (max-width: 710px) {
    margin-left: 400px;
  }

  @media screen and (max-width: 690px) {
    margin-left: 380px;
  }

  @media screen and (max-width: 670px) {
    margin-left: 360px;
  }

  @media screen and (max-width: 650px) {
    margin-left: 340px;
  }

  @media screen and (max-width: 630px) {
    margin-left: 320px;
  }

  @media screen and (max-width: 610px) {
    margin-left: 300px;
  }

  @media screen and (max-width: 590px) {
    margin-left: 280px;
  }

  @media screen and (max-width: 570px) {
    margin-left: 260px;
  }

  @media screen and (max-width: 550px) {
    margin-left: 240px;
  }

  @media screen and (max-width: 530px) {
    margin-left: 220px;
  }

  @media screen and (max-width: 510px) {
    margin-left: 200px;
  }

  @media screen and (max-width: 490px) {
    margin-left: 210px;
    width: 240px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 200px;
  }

  @media screen and (max-width: 470px) {
    margin-left: 190px;
  }

  @media screen and (max-width: 460px) {
    margin-left: 180px;
  }

  @media screen and (max-width: 450px) {
    margin-left: 170px;
  }

  @media screen and (max-width: 440px) {
    margin-left: 160px;
  }

  @media screen and (max-width: 430px) {
    margin-left: 150px;
  }

  @media screen and (max-width: 420px) {
    margin-left: 140px;
  }

  @media screen and (max-width: 410px) {
    margin-left: 130px;
  }

  @media screen and (max-width: 400px) {
    margin-left: 120px;
  }

  @media screen and (max-width: 390px) {
    margin-left: 110px;
  }

  @media screen and (max-width: 380px) {
    margin-left: 100px;
  }

  @media screen and (max-width: 370px) {
    margin-left: 90px;
  }

  @media screen and (max-width: 360px) {
    margin-left: 80px;
  }

  @media screen and (max-width: 350px) {
    margin-left: 70px;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 22px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  font-size: 20px;
`;
