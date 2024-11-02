import { Modal } from "antd";
import React from "react";
import { Svm } from "./style";
import Markdown from "markdown-to-jsx";

const ServiceModal = ({ modalVisible, setModalVisible, data }) => {
  return (
    <>
      <Modal
        centered
        open={modalVisible}
        width={700}
        onCancel={() => setModalVisible(false)}
        bodyStyle={{ background: "#fff" }}
        footer={false}
      >
        <Svm.Container>
          <Svm.Title>{data.title}</Svm.Title>
          <Svm.Text><Markdown>{data.text}</Markdown></Svm.Text>
        </Svm.Container>
      </Modal>
    </>
  );
};

export default ServiceModal;
