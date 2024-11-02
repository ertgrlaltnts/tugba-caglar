import React, { useEffect } from "react";
import { Shr, Element } from "./style";
import { List } from "phosphor-react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: -50 },
};

const MobileHeader = ({ setModalVisible, settings }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Shr.Container
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="square"
    >
      <Shr.BottomHeader>
        <Shr.BottomHeaderRow>
          <Element onClick={() => setModalVisible(true)}>
            <List size={32} weight="regular" />
          </Element>
        </Shr.BottomHeaderRow>
        <Shr.BottomHeaderRow>
          <Shr.Logo
            src={`${process.env.NEXT_PUBLIC_IP}${settings.logo.data.attributes.url}`}
            alt="tugba-caglar-logo"
          />
        </Shr.BottomHeaderRow>
        <Shr.BottomHeaderRow></Shr.BottomHeaderRow>
      </Shr.BottomHeader>
    </Shr.Container>
  );
};

export default MobileHeader;
