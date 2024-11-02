import styled from "styled-components";
import { device } from "../../data/breakpoint";
import Link from "next/link";

export const Ftr = {
  Container: styled.div`
    background-color: #252525;
    padding: 30px 100px;

    @media ${device.mobileL} {
      padding: 30px 50px;
    }
  `,

  LogoContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;

    @media ${device.laptop} {
      justify-content: center;
      padding-bottom: 30px;
    }
  `,

  Logo: styled.img`
    width: 220px;
    height: 100px;
    object-fit: contain;
    align-self: center;
    @media ${device.tablet} {
      width: 175px;
      height: 60px;
    }
  `,
  Title: styled.div`
    font-family: "Quicksand";
    color: #fff;
    font-size: 18px;

    @media ${device.tablet} {
      font-size: 14px;
    }
  `,
  Contact: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media ${device.laptop} {
      align-items: center;
    }
  `,
  ContactElement: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 2px 0;
  `,
  ContactText: styled.div`
    font-family: "Quicksand";
    font-weight: 500;
    color: #a8a8a8;
    font-size: 12px;
    margin-left: 8px;

    @media ${device.tablet} {
      font-size: 10px;
    }

    @media ${device.mobileL} {
      margin-left: 3px;
    }
  `,

  LinkText: styled(Link)`
    font-family: "Quicksand";
    font-weight: 500;
    color: #a8a8a8;
    font-size: 12px;
    margin-top: 9px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #bf8c41;
    }

    @media ${device.tablet} {
      font-size: 10px;
      margin-top: 4px;
    }
  `,

  SocialMedia: styled.div`
    @media ${device.laptop} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    @media ${device.mobileL} {
      margin-top: 15px;
    }
  `,
  IconRow: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
  `,

  Icon: styled(Link)`
    margin-right: 15px;

    @media ${device.laptop} {
      margin: 0 5px;
    }
  `,
  Copyright: styled.div`
    color: #a8a8a8;
    font-family: "Quicksand";
    font-size: 12px;
    margin-top: 20px;
    max-width: 60%;
    font-weight: 500;

    @media ${device.laptop} {
      margin-top: 10px;
      max-width: 80%;
      text-align: center;
    }

    @media ${device.tablet} {
      font-size: 10px;
    }
  `,
};
