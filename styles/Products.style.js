import styled from "styled-components";
import { device } from "../data/breakpoint";
import Image from "next/image";

export const Prl = {
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 100%;
    position: relative;
  `,

  TextTitle: styled.h1`
    font-size: 40px;
    font-family: "Quicksand";
    font-weight: 800;
    color: #fff;
    margin-top: 60px;
    @media ${device.laptop} {
      font-size: 25px;
    }
  `,
  Text: styled.div`
    font-size: 16px;
    font-family: "Quicksand";
    font-weight: 500;
    color: #fff;

    text-align: center;
    margin-top: 10px;
    @media ${device.laptop} {
      font-size: 16px;
    }

    @media ${device.tablet} {
      font-size: 14px;
      text-align: center;
    }
  `,
  More: styled.div`
    font-family: "Quicksand";
    background-color: #bf8c41;
    font-size: 25px;
    padding: 5px 15px;
    border-radius: 5px;
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.3;
    }
  `,

  MidBlock: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 10px solid #bf8c41;
  `,
  Services: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 150px;

    @media ${device.mobileL} {
      margin: 40px 50px;
    }
  `,

  ServicesText: styled.div`
    color: "#000";
    font-family: "Quicksand";
    font-size: 30px;
    margin: 40px 0;
  `,

  AlignCenter: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
      padding: 0 100px;
      flex-direction: column;
    }

    @media ${device.mobileL} {
      padding: 0 30px;
    }
  `,

};
