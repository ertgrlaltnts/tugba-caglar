import styled from "styled-components";
import { device } from "../data/breakpoint";

export const Dyn = {
  Container: styled.div`
    padding: 100px 0 50px 0;
  `,
  TopBlock: styled.div`
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
    font-family: "Quicksand";
    font-size: 40px;
    margin: 40px 0;
  `,

  SliderBlock: styled.div`
    border-top: 10px solid #bf8c41;
    padding: 30px 0;
  `,
  BlockTitle: styled.div`
    font-family: "Quicksand";
    font-size: 30px;
    margin-top: 30px;
    font-weight: 600;
    color: #000;
    text-align: center;
    @media ${device.laptop} {
      font-size: 25px;
    }
  `,

  BlockText: styled.div`
    font-family: "Quicksand";
    font-size: 16px;
    font-weight: 500;
    color: #000;
    margin-top: 20px;
    max-width: 60%;
    @media ${device.laptop} {
      font-size: 16px;
    }

    @media ${device.tablet} {
      font-size: 14px;
    }
  `,

  Image: styled.img`
    width: 100vh;
    height: 50vh;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  `,
};
