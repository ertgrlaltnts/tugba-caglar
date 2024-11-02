import styled from "styled-components";
import { device } from "../../data/breakpoint";
import Image from "next/image";
import Link from "next/link";

export const Svb = {
  Container: styled(Link)`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 20px 0;
    overflow: hidden;
    border-radius: 10px;
    background: #fff;

    @media ${device.mobileL} {
      padding: 20px 10px;
    }
  `,
  Image: styled(Image)`
    width: 60px;
    height: 60px;
    object-fit: contain;

    @media ${device.mobileL} {
      width: 48px;
      height: 48px;
    }

    @media ${device.mobileM} {
      width: 36px;
      height: 36px;
    }
  `,
  TextBlock: styled.div`
    margin-left: 20px;
  `,
  Title: styled.div`
     
    font-weight: 500;
    font-size: 25px;
    text-align: center;
    margin-top: 15px;
    color: #000;

    @media ${device.tablet} {
      font-size: 16px;
    }
  `,
  Text: styled.div`
     
    font-weight: 400;

    font-size: 14px;
    color: #000;
    margin-top: 15px;
    letter-spacing: 1px;

    @media ${device.tablet} {
      font-size: 10px;
    }
  `,
};

export const ButtonText = styled.div`
   
  font-weight: 500;
  font-size: 18px;
  color: #000;
  text-align: center;
  transition: all 0.4s ease-in-out;

  @media ${device.tablet} {
    font-size: 14px;
  }
`;
export const ButtonIcon = styled.div`
  margin-left: 10px;
  margin-top: 5px;
  transition: all 0.4s ease-in-out;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-top: 20px;
  &:hover {
    ${ButtonText} {
      color: #bf8c41;
    }

    ${ButtonIcon} {
      transform: translateX(10px);
    }
  }
`;
