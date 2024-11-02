import styled from "styled-components";
import { device } from "../../data/breakpoint";
import { motion } from "framer-motion";

export const Htb = {
  Container: styled.div`
    width: 200px;
    height: 100px;
    background-color: #fff;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-bottom: 4px solid #bf8c41;

    @media ${device.tablet} {
      width: 150px;
      height: 75px;
    }

    @media ${device.mobileL} {
      width: 80px;
      height: 40px;
    }

    @media ${device.mobileS} {
      width: 60px;
      height: 30px;
    }
  `,
  Title: styled(motion.div)`
    color: #bf8c41;
     
    font-weight: 500;
    font-size: 35px;
    margin-bottom: 0;
    @media ${device.tablet} {
      font-size: 25px;
    }

    @media ${device.mobileL} {
      font-size: 16px;
    }

    @media ${device.mobileS} {
      font-size: 12px;
    }
  `,
  SubTitle: styled.div`
    color: #000;
     
    font-weight: 500;

    font-size: 14px;
    margin-top: 7px;

    @media ${device.tablet} {
      font-size: 12px;
    }

    @media ${device.mobileL} {
      font-size: 8px;
      margin-top: 4px;
    }

    @media ${device.mobileS} {
      font-size: 6px;
      margin-top: 2px;
    }
  `,

  TitleContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
};
