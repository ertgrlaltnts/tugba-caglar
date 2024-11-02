import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Hdw = {
  Container: styled.div`
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  Close: styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  `,

  Logo: styled.img`
    height: 70px;
    object-fit: cover;
    align-self: center;
  `,
  Links: styled.div`
    margin: 120px 0;

    @media ${device.tablet} {
      margin: 60px 0;
    }
  `,
  Element: styled.div`
    color: #a8a8a8;
    font-family: Quicksand;
    font-weight: 600;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    transition: all 0.4s ease-in-out;
    &:hover {
      color: #fff;
    }

    @media ${device.tablet} {
      font-size: 14px;
    }
  `,

  Copyright: styled.div`
    color: #a8a8a8;
    font-family: "Quicksand";
    max-width: 80%;
    text-align: center;
    font-size: 16px;
    margin-top: 40px;
    @media ${device.tablet} {
      font-size: 14px;
    }
  `,

  Row: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
  `,
  RowItem: styled.div`
    color: #a8a8a8;
    font-family: "Quicksand";
    padding: 0 5px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
      color: #fff;
    }
  `,
};
