import styled from "styled-components";
import { device } from "../data/breakpoint";

export const Adl = {
  Video: styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    z-index: -1;
  `,

  Source: styled.source``,

  Container: styled.div`
    z-index: 1;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  `,
  AuthBlock: styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 5px;
    padding: 30px;
    width: 25%;

    @media ${device.laptop} {
      width: 40%;
    }

    @media ${device.laptop} {
      width: 60%;
    }

    @media ${device.mobileL} {
      width: 80%;
    }
  `,

  Logo: styled.img`
    width: 200px;
    height: 80px;
    object-fit: contain;
    padding: 0 20px;
    border-radius: 5px;
  `,
  Title: styled.div`
    font-family: Quicksand;
    font-weight: 600;
    font-size: 25px;
    margin: 30px 0 10px 0;
  `,
  Input: styled.input`
    outline: none;
    border: none;
    width: 100%;
    font-family: Quicksand;
    font-weight: 500;
    margin-top: 20px;

    padding: 10px;
  `,
  Button: styled.div`
    width: 100%;
    text-align: center;
    font-family: Quicksand;
    font-weight: 600;
    color: #fff;
    padding: 7px 0;
    border-radius: 5px;
    margin-top: 15px;
    background: #bf8c41;
    cursor: pointer;
    font-size: 16px;
  `,

  ButtonBlock: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
  `,
};
