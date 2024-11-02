import styled from "styled-components";
import { device } from "../../data/breakpoint";
import Link from "next/link";
import { Dropdown } from "antd";
import { motion } from "framer-motion";

export const Shr = {
  Container: styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: rgb(0, 0, 0, 0.8);
    display: none;
    @media ${device.laptop} {
      display: block;
    }
  `,
  TopHeader: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #a0a0a0;
    justify-content: space-between;
    padding: 10px 15px;
  `,

  TopHeaderRow: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Social: styled.div`
    cursor: pointer;
    margin-right: 8px;
  `,

  Social2: styled.div`
    cursor: pointer;
    margin-left: 8px;
  `,

  Number: styled.div`
    color: #fff;
    font-family: Quicksand;
    font-weight: 600;
    text-decoration: underline;
    font-size: 14px;
    cursor: pointer;
    @media ${device.laptop} {
      font-size: 12px;
    }
  `,

  BottomHeader: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px;
    margin-top: 10px;

    @media ${device.laptop} {
      padding: 0 10px;
    }
  `,

  BottomHeaderRow: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 34%;
    @media ${device.laptop} {
      width: 40%;
    }
  `,

  Logo: styled.img`
    width: 150px;
    height: 75px;
    object-fit: contain;
    cursor: pointer;
    padding: 10px;
    @media ${device.tablet} {
      width: 120px;
      height: 60px;
    }
  `,
};

export const Element = styled.div`
  font-family: "" Quicksand "";
  font-size: 15px;
  position: relative;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  width: 30%;
  text-align: center;
  text-decoration: none;
  @media ${device.laptop} {
    font-size: 12px;
  }
`;

export const ElementDropdown = styled(Dropdown)`
  font-family: "" Quicksand "";
  font-size: 15px;
  position: relative;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  width: 30%;
  text-align: center;
  text-decoration: none;
  @media ${device.laptop} {
    font-size: 12px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 20px;
    height: 20px;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    transition: 0.5s;
    transition-delay: 0.2s;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
    transition: 0.5s;
    transition-delay: 0.2s;
  }

  &:hover {
    background-color: #fff;
    box-shadow: 0 0 50px #fff;
    transition-delay: 0.2s;
    color: #000;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
    transition-delay: 0s;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
  }

  &:hover::after {
    width: 100%;
    transition-delay: 0s;
    height: 100%;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
  }
`;

export const ElementList = styled(Link)`
  font-family: "" Quicksand "";
  font-size: 15px;
  position: relative;
  color: #fff;
  @media ${device.laptop} {
    font-size: 12px;
  }
`;
