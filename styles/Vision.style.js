import styled from "styled-components";
import { device } from "../data/breakpoint";

export const Vsn = {
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
    height: 100vh;
  `,

  TextTitle: styled.div`
    font-size: 35px;
    font-family: "Quicksand";
    font-weight: 800;
    color: #bf8c41;
    text-align: left;

    @media ${device.laptop} {
      font-size: 25px;
    }

    @media ${device.tablet} {
      font-size: 18px;
      text-align: center;
    }
  `,

  TextSubTitle: styled.div`
    font-size: 20px;
    font-family: "Quicksand";
    font-weight: 600;
    text-align: left;
    color: #fff;
    margin-top: -5px;

    @media ${device.laptop} {
      font-size: 16px;
    }

    @media ${device.tablet} {
      font-size: 14px;
      text-align: center;
    }
  `,

  Text: styled.div`
    font-size: 14px;
    font-family: "Quicksand";
    color: #fff;
    text-align: left;
    margin-top: 10px;

    @media ${device.laptop} {
      font-size: 12px;
    }

    @media ${device.tablet} {
      font-size: 10px;
      text-align: center;
      margin-top: 3px;
    }

    @media ${device.mobileL} {
      font-size: 8px;
    }
  `,

  AlignCenter: styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 150px;

    @media ${device.tablet} {
      padding: 0px 100px 0 100px;
      flex-direction: column;
    }

    @media ${device.mobileL} {
      padding: 50px 30px 0 30px;
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
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;

    @media ${device.laptop} {
      width: 200px;
      height: 200px;
    }

    @media ${device.tablet} {
      width: 150px;
      height: 150px;
    }

    @media ${device.mobileL} {
      width: 120px;
      height: 120px;
    }
  `,

  TextBlock: styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;

    @media ${device.laptop} {
      padding-top: 100px;
    }

    @media ${device.tablet} {
      padding-top: 20px;
      width: 100%;
      text-align: center;
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

  Info: styled.div`
    margin-top: 10px;

    @media ${device.tablet} {
      font-size: 5px;
    }
  `,
  InfoTitle: styled.div`
    font-family: "Quicksand";
    font-size: 20px;
    font-weight: 600;
    color: #fff;

    @media ${device.laptop} {
      font-size: 16px;
    }

    @media ${device.tablet} {
      font-size: 14px;
    }
  `,
  InfoText: styled.div`
    font-family: "Quicksand";
    font-size: 14px;
    font-weight: 400;
    color: #fff;

    @media ${device.laptop} {
      font-size: 12px;
    }

    @media ${device.tablet} {
      font-size: 10px;
      text-align: center;
    }

    @media ${device.mobileL} {
      font-size: 8px;
    }
  `,

  ContactRow: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    @media ${device.tablet} {
      justify-content: center;
    }
  `,
  Contact: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    @media ${device.tablet} {
      margin-top: 5px;
    }
  `,
  Icon: styled.div`
    margin-top: 5px;
    margin-right: 5px;
  `,
  ContactText: styled.div`
    font-family: "Quicksand";
    font-size: 14px;
    font-weight: 400;
    color: #fff;

    @media ${device.laptop} {
      font-size: 12px;
    }

    @media ${device.tablet} {
      font-size: 10px;
      text-align: center;
    }
    @media ${device.mobileL} {
      font-size: 8px;
    }
  `,
};
