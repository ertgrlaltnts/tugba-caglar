import styled from "styled-components";
import { device } from "../data/breakpoint";

export const Abt = {
  Container: styled.div`
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url("${(props) => props.image}");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
    height: 100vh;
  `,

  TopBlock: styled.div`
    width: 100%;
    margin: 30px 0;
  `,

  TextTitle: styled.div`
    font-size: 35px;
    font-family: "Quicksand";
    font-weight: 800;
    text-align: left;
    color: #bf8c41;

    @media ${device.laptop} {
      font-size: 25px;
    }

    @media ${device.tablet} {
      font-size: 18px;
      text-align: center;
    }

    @media ${device.mobileL} {
      font-size: 14px;
    }
  `,
  Text: styled.div`
    font-size: 14px;
    font-family: "Quicksand";
    font-weight: 500;
    color: #fff;
    text-align: left;
    margin-top: 10px;

    @media ${device.tablet} {
      text-align: center;
    }
  `,

  AlignCenter: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 50px;

    @media ${device.tablet} {
      padding: 0 100px;
      flex-direction: column;
    }

    @media ${device.mobileL} {
      padding: 0 30px;
    }
  `,

  ImageBlock: styled.div`
    width: 30%;

    @media ${device.tablet} {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media ${device.mobileS} {
      padding-top: 30px;
    }
  `,

  Image: styled.img`
    width: 90%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;

    @media ${device.mobileL} {
      align-self: center;
    }
  `,

  TextBlock: styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;

    @media ${device.tablet} {
      padding-top: 20px;
      width: 100%;
    }
  `,

  MidBlock: styled.div`
    margin: 40px 0;
    width: 100%;
  `,
  Services: styled.div`
    margin: 40px 150px;
  `,
  BlockTitle: styled.div`
    font-family: "Quicksand";
    font-size: 35px;
    color: #000;
    text-align: center;
  `,
  BlockRow: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  BlockImage: styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
  `,
  BlockText: styled.div`
    width: 50%;
    font-family: "Quicksand";
    font-size: 20px;
  `,

  SliderBlock: styled.div`
    margin: 10px 0;
  `,
};
