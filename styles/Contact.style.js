import styled from "styled-components";
import { device } from "../data/breakpoint";

export const Cnt = {
  Container: styled.div``,
  TopBlock: styled.div`
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url("${(props) => props.image}");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  TextTitle: styled.h1`
    font-size: 35px;
     
    font-weight: 800;
    color: #fff;
    text-align: center;
    margin-top:80px;
    @media ${device.laptop} {
      font-size: 25px;
    }
  `,
  Text: styled.div`
    font-size: 16px;
     
    font-weight: 500;
    color: #fff;

    margin-top: 10px;
    @media ${device.laptop} {
      font-size: 16px;
    }

    @media ${device.tablet} {
      font-size: 14px;
      text-align: center;
    }
  `,
  More: styled.button`
     
    outline: none;
    border: none;
    font-weight: 600;
    background-color: #bf8c41;
    font-size: 20px;
    padding: 5px 0;
    border-radius: 5px;
    width: 100%;
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
    opacity: ${(props) => (props.disabled ? 0.3 : 0.8)};
    transition: all 0.3s ease-in-out;
    text-align: center;
    &:hover {
      opacity: 0.3;
    }

    @media ${device.tablet} {
      font-size: 20px;
    }
  `,

  MidBlock: styled.div`
    border-top: 10px solid #bf8c41;
    padding-bottom: 50px;
  `,

  Margin: styled.div`
    margin: 40px 150px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    @media ${device.laptop} {
      margin: 40px 15px;
    }

    @media ${device.tablet} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `,

  Services: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 150px;
  `,

  ServicesText: styled.div`
    color: "#000";
     
    font-size: 30px;
    margin: 40px 0;
  `,

  AlignCenter: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0 150px;
    padding-top: 80px;

    @media ${device.mobileL} {
      padding: 0 10px;
    }
  `,

  TextContainer: styled.div``,

  Left: styled.div`
    width: 45%;

    @media ${device.tablet} {
     width: 100%;
    }
  `,
  LeftTitle: styled.div`
    color: #000;
     
    font-weight: 600;
    font-size: 25px;
  `,
  InputBox: styled.div`
    width: 100%;
    margin-top: 10px;
  `,
  InputTitle: styled.div`
    color: #000;
     
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 5px;
  `,
  Input: styled.input`
     
    font-weight: 500;
    border: none;
    outline: none;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 2px;
    width: 97%;
  `,

  InputArea: styled.textarea`
     
    font-weight: 500;
    border: none;
    outline: none;
    resize: none;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 2px;
    width: 97%;
  `,

  Right: styled.div`
    width: 45%;

    @media ${device.tablet} {
      width: 100%;
      margin-top: 20px;
    }
  `,
  RightContainer: styled.div`
    padding: 10px 0;
    border-radius: 5px;
    width: 100%;
  `,
  RightElement: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;
  `,
  Icon: styled.div`
    margin-right: 7px;
  `,
  ElementText: styled.div`
    color: #fff;
     
    font-size: 16px;

    @media ${device.mobileL} {
      font-size: 13px;
    }

    @media ${device.mobileS} {
      font-size: 10px;
    }
  `,
  Map: styled.iframe`
    border: none;
    width: 100%;
    height: 65vh;
  `,
};
