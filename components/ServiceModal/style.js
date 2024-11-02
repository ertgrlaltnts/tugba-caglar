import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Svm = {
  Container: styled.div`
    padding: 20px;
    border-bottom: 7px solid #bf8c41;
    height: 70vh;

    position: relative;
    border-radius: 5px;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    @media ${device.mobileL} {
      padding-top: 50px;
    }
  `,
  Image: styled.img`
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin: 30px 0 10px 0;
  `,
  Title: styled.div`
    font-family: "Quicksand";
    font-size: 30px;
    color: #000;
    text-align: center;
  `,
  Text: styled.div`
    font-family: "Quicksand";
    font-size: 14px;
    color: #000;
    padding: 10px;
  `,
};
