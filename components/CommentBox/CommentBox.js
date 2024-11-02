import React from "react";
import { Cmb } from "./style";
import { Star } from "phosphor-react";
import { useWindowSize } from "@/helper/windowSize";

const CommentBox = ({ item }) => {
  const size = useWindowSize();
  return (
    <Cmb.Block>
      <Cmb.Container>
        <Cmb.Name>{item.title}</Cmb.Name>
        <Cmb.Firm>{item.subtitle}</Cmb.Firm>
        <Cmb.StarRow>
          {[...Array(parseInt(item.stars)).keys()].map((item, index) => (
            <Star
              key={index}
              size={size.width > 768 ? 20 : 12}
              weight="fill"
              color="#bf8c41"
            />
          ))}
        </Cmb.StarRow>
        <Cmb.Comment>{item.text}</Cmb.Comment>
      </Cmb.Container>
    </Cmb.Block>
  );
};

export default CommentBox;
