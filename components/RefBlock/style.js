import styled from "styled-components";
import { device } from "../../data/breakpoint";
import Image from "next/image";

export const Rfb = {
  Container: styled.div`
    padding: 0 10px 10px 10px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
  `,
  Image: styled.img`
    object-fit: cover;
    width: 100%;
    height: 120px;
    transition: all 0.4s ease-in-out;
    &:hover {
      transform: scale(1.05) rotate(2deg);
    }

    @media ${device.tablet} {
      height: 90px;
    }
  `,
};
