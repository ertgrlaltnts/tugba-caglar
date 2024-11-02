import styled from "styled-components";
import { device } from "../../data/breakpoint";
import { Image } from "antd";

export const Prd = {
  Container: styled.div`
    display: block;
    width: 100%;
    margin-bottom: 15px;
  `,
};

export const ImageR = styled(Image)`
  object-fit: cover;
  border-radius: 10px;
  width: 100% !important;
  height: 200px !important;
  transition: all 0.4s ease-in-out;
`;
