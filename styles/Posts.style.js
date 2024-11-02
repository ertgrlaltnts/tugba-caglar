import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { device } from "../data/breakpoint";

export const Hmp = {
  Container: styled.div`
    margin-bottom: 20px;
  `,

  AlignCenter: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 350px;

    @media ${device.tablet} {
      padding: 0 100px;
      flex-direction: column;
    }

    @media ${device.mobileL} {
      padding: 0 30px;
    }
  `,

  TextTitle: styled.h1`
    font-size: 40px;
     
    font-weight: 800;
    color: #fff;
    margin-top: 60px;
    text-align:center;
    @media ${device.laptop} {
      font-size: 25px;
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

  Block: styled.div`
    margin-top: 60px;
    padding: 0 150px;

    @media ${device.laptop} {
      padding: 0 10px;
    }
  `,

  BlockItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size:16px;
  `,

  BlockItem2: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 15px 0;
  `,

  BlockItem3: styled.div`

  margin-top:20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 40px 30px;
`,

  Image: styled(Image)`
    width: 100% !important;
    height: auto;
    object-fit: contain;
    padding: 0 20px;
    margin-bottom:10px;
  `,

  ImageBlock: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
  `,

  Title: styled.div`
     
    font-weight: 600;
    font-size: 30px;
    margin: 30px 0 15px 0;

    @media ${device.tablet} {
      font-size: 20px;
    }
  `,

  Title2: styled.div`
     
    font-weight: 600;
    text-align:center;
    font-size: 20px;
    margin: 15px 0;
  `,

  Keys: styled.div`
  display:inline-block;
  border:1px solid #bf8c41;
  border-radius:5px;
  padding:6px;
  font-size:12px;
  margin:5px;
  `,

  Element: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin: 5px;
  `,
  ElementText: styled.div`
     
    font-weight: 400;
    font-size: 14px;
    margin-left: 10px;
    text-align: left !important;
    @media ${device.tablet} {
      margin-left: 0;
    }
  `,

  Button: styled(Link)`
    cursor: pointer;
    background-color: #bf8c41;
    color: #fff;
     
    font-weight: 600;
    font-size: 18px;
    padding: 8px 15px;
    border-radius: 2px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    margin: 25px 0 15px 0;
    &:hover {
      opacity: 0.7;
      color: #fff;
    }
  `,
};
