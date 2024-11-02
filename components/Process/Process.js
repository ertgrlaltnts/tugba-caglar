import React from "react";
import Lottie from "lottie-react";
import Animation from "/public/lottie/process.json";
import { Modal } from "antd";

const Process = ({ modalVisible }) => {
  return (
    <Modal footer={null} closable={false} open={modalVisible}>
      <Lottie autoplay loop animationData={Animation} />
    </Modal>
  );
};

export default Process;
