import styled from "styled-components";
import { device } from "../../data/breakpoint";
import Link from "next/link";

export const Abb = {
  Title: styled.div`
    font-family: "Quicksand";
    font-weight: 600;
    font-size: 20px;
    color: #000;
    border-bottom: 2px solid #bf8c41;
    width: 100%;
    padding: 10px 20px;
  `,

  Text: styled.div`
    font-family: "Quicksand";
    font-size: 14px;
  `,

  TextBlock: styled.div`
    padding: 20px;
  `,
};

export const Image = styled.img`
  object-fit: cover;
  height: 40%;
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

export const Container = styled.div`
  cursor: grab;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 350px;
  height: 400px;
  margin: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.4s ease-in-out;

  justify-content: flex-start;
  overflow: hidden;
  background-color: #fff;

  @media ${device.mobileL} {
    width: 300px;
    height: 400px;
  }

  &:hover {
    ${Image} {
      transform: scale(1.04);
    }
  }
`;

export const ButtonText = styled.div`
  font-family: "Quicksand";
  font-weight: 500;
  font-size: 14px;
  color: #a9a9a9;
  margin-top: 15px;
  transition: all 0.4s ease-in-out;
`;
export const ButtonIcon = styled.div`
  margin-top: 19.5px;
  margin-left: 20px;
  transition: all 0.4s ease-in-out;
`;

export const ButtonRow = styled(Link)`
  position: absolute;
  bottom: 20px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    ${ButtonText} {
      color: #bf8c41;
    }

    ${ButtonIcon} {
      transform: translateX(30px);
    }
  }
`;
