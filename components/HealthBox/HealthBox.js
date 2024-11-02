import React, { useEffect, useRef } from "react";
import { Htb } from "./style";
import {
  useInView,
  useMotionValue,
  animate,
  useTransform,
} from "framer-motion";

const HealthBox = ({ subtitle, from, to }) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 6 });
    }
  }, [count, inView, to]);
  return (
    <Htb.Container>
      <Htb.TitleContainer>
        <Htb.Title>+</Htb.Title>
        <Htb.Title ref={ref}>{rounded}</Htb.Title>
      </Htb.TitleContainer>

      <Htb.SubTitle>{subtitle}</Htb.SubTitle>
    </Htb.Container>
  );
};

export default HealthBox;
