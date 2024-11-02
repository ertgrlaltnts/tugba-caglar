import React from "react";
import Logo from "@/public/image/logo.png";
import { Ldg } from "./style";
import { motion } from "framer-motion";
import Image from "next/image";

const Loading = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <Ldg.Container>
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.1, opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Ldg.Image src={Logo} />
        </motion.div>
      </Ldg.Container>
    </motion.div>
  );
};

export default Loading;
