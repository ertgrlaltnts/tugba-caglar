import React from "react";
import { ImageR, Prd } from "./style";

const Product = ({ image }) => {
  return (
    <Prd.Container>
      <ImageR src={image} />
    </Prd.Container>
  );
};

export default Product;
