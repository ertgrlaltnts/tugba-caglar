import styled from "styled-components";
import { device } from "../data/breakpoint";

export const Src = {
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
    height: 50vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  AlignCenter: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 100px;

    @media ${device.tablet} {
      padding: 0 100px;
    }

    @media ${device.mobileL} {
      padding: 0 30px;
    }
  `,

  ServicesText: styled.div`
    color: "#000";
     
    font-size: 40px;
    margin: 40px 0;
  `,

  SliderBlock: styled.div`
    border-top: 10px solid #bf8c41;
    padding: 30px 0;
  `,
  BlockTitle: styled.div`
     
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    margin-top: 20px;
    @media ${device.laptop} {
      font-size: 25px;
    }
  `,

  BlockText: styled.div`
     
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-align: center;
    margin-top: 20px;
    max-width: 60%;

    @media ${device.laptop} {
      font-size: 16px;
    }

    @media ${device.tablet} {
      font-size: 14px;
    }
  `,
};
