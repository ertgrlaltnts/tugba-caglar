import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Prm = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: 5px;
    border-bottom: 7px solid #bf8c41;
    @media ${device.tablet} {
      flex-direction: column;
      justify-content: center;
    }
  `,
  Left: styled.div`
    width: 40%;

    @media ${device.mobileL} {
      width: 80%;
    }
  `,
  Right: styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    @media ${device.tablet} {
      width: 100%;
    }
  `,
  Image: styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
  `,
  Title: styled.div`
    color: #000;
    font-family: "Quicksand";
    font-size: 30px;

    @media ${device.tablet} {
      font-size: 20px;
      margin-top: 10px;
      text-align: center;
    }
  `,
  Subtitle: styled.div`
    color: #a8a8a8;
    font-family: "Quicksand";
    font-size: 18px;
    margin-top: -15px;
    @media ${device.tablet} {
      font-size: 14px;
      margin-top: -10px;
      text-align: center;
    }
  `,

  CategoriesTitle: styled.div`
    color: #000;
    font-family: "Quicksand";
    font-size: 18px;
    margin: 10px 0;
    @media ${device.tablet} {
      font-size: 14px;
      text-align: center;
    }
  `,
  Categories: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      ". . . ."
      ". . . ."
      ". . . .";
  `,
  CategoriesElement: styled.div`
    background-color: #a8a8a8;
    color: #fff;
    font-family: "Quicksand";
    font-size: 14px;
    padding: 2px 8px;
    border-radius: 5px;
    margin: 0 5px 5px 0;
    text-align: center;
  `,
  Price: styled.div`
    background-color: #bf8c41;
    color: #fff;
    font-family: "Quicksand";
    font-size: 25px;
    padding: 2px 25px;
    border-radius: 5px;
    margin-top: 10px;
    text-align: center;
  `,

  Text: styled.div`
    font-size: 14px;
    font-family: "Quicksand";
    @media ${device.tablet} {
      font-size: 12px;

      text-align: center;
    }
  `,
};
