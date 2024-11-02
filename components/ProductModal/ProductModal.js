import React from "react";
import { Prm } from "./style";
import { Modal, Image } from "antd";

const ProductModal = ({ modalVisible, setModalVisible, data }) => {
  return (
    <>
      <Modal
        centered
        width={1000}
        open={modalVisible}
        bodyStyle={{ backgroundColor: "#fff" }}
        onCancel={() => setModalVisible(false)}
        footer={false}
      >
        <Prm.Container>
          <Prm.Left>
            <Image style={{ borderRadius: 10 }} src={data.image} />
          </Prm.Left>
          <Prm.Right>
            <Prm.Title>{data.title}</Prm.Title>
            <Prm.Subtitle>{data.subtitle}</Prm.Subtitle>
            <Prm.CategoriesTitle>Açıklama</Prm.CategoriesTitle>
            <Prm.Text>{data.text}</Prm.Text>
          </Prm.Right>
        </Prm.Container>
      </Modal>
    </>
  );
};

export default ProductModal;
