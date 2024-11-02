import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Cmb = {
  Block: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Container: styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 25vh;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media ${device.mobileL} {
      width: 70%;
    }
  `,
  Name: styled.div`
    font-family: "Quicksand";
    font-weight: 600;
    font-size: 22px;
    color: #000;
    text-align: center;

    @media ${device.tablet} {
      font-size: 16px;
    }

    @media ${device.mobileM} {
      font-size: 14px;
    }
  `,
  Firm: styled.div`
    font-family: "Quicksand";
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: #a8a8a8;
    margin-top: 2px;
    @media ${device.tablet} {
      font-size: 10px;
    }

    @media ${device.mobileM} {
      font-size: 8px;
    }
  `,
  StarRow: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    @media ${device.tablet} {
      margin: 10px 0;
    }
  `,
  Comment: styled.div`
    font-family: "Quicksand";
    font-size: 14px;
    text-align: center;
    color: #000;
    padding: 0 55px;

    @media ${device.tablet} {
      font-size: 10px;
    }

    @media ${device.mobileM} {
      font-size: 8px;
    }
  `,
};
