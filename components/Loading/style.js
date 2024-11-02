import styled from "styled-components";
import Lottie from "lottie-react";
import Image from "next/image";

export const Ldg = {
  Container: styled.div`
    flex: 1;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
  `,

  Lottie: styled(Lottie)`
    width: 300px;
    height: 300px;
    align-self: center;
  `,

  Image: styled(Image)`
    width: 400px;
    height: 200px;
    object-fit: contain;
  `,
};
