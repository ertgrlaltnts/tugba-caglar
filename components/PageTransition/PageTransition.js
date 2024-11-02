import { motion } from "framer-motion";
import { FloatButton } from "antd";
import { ArrowLineUp } from "phosphor-react";

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ x: 0, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.1 }}
    style={{overflow:"hidden"}}
  >
    {children}
  </motion.div>
);
export default PageTransition;
