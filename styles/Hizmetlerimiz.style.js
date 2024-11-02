import styled from "styled-components";
import { device } from "../data/breakpoint";
import Image from "next/image";
import Link from "next/link";

export const Hiz = {
  Container: styled.div`
    margin: 0 250px;

    @media ${device.laptop} {
      margin: 0 50px;
    }

    @media ${device.mobileL} {
      margin: 0 20px;
    }
  `,

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
    font-size: 14px;
    font-family: "Quicksand";
    font-weight: 500;
    color: #fff;
    text-align: left;
    margin-top: 10px;

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

  AlignCenter: styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 150px;

    @media ${device.tablet} {
      padding: 0 100px;
      flex-direction: column;
    }

    @media ${device.mobileL} {
      padding: 0 30px;
    }
  `,

  YaziBlock: styled.div`
    margin: 15px;
    background: #fff;
    padding-bottom: 40px;
    border-radius: 10px;
    height:450px;
    position:relative;
  `,

  YaziImage: styled.img`
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  `,

  TextBlock: styled.div`
    padding: 0 20px;
  `,

  YaziTitle: styled.h3`
    text-align: center;
    font-family: Quicksand;
    color: #000;
    font-size: 22px;
  `,
  YaziContent: styled.p`
    font-family: Quicksand;
    margin-bottom: 30px;
  `,
  Button: styled(Link)`
    cursor: pointer;
    font-family: "Quicksand";
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    transition: all 0.4s ease-in-out;
    background-color: #bf8c41;
    padding: 10px;
    width: 120px;
    text-align: center;
    border-radius: 5px;
    position:absolute;
    bottom:20px;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  `,
};
