import React from "react";
import { Rfb } from "./style";

const RefBlock = ({ image }) => {
  return (
    <Rfb.Container>
      <Rfb.Image width={300} height={300} src={image} />
    </Rfb.Container>
  );
};

export default RefBlock;
