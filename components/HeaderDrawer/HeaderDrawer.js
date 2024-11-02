import React from "react";
import { Hdw } from "./style";
import { Drawer } from "antd";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  WhatsappLogo,
  X,
} from "phosphor-react";
import { useWindowSize } from "@/helper/windowSize";
import Link from "next/link";

const HeaderDrawer = ({ modalVisible, setModalVisible, settings }) => {
  const size = useWindowSize();
  const onClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Drawer
        placement="left"
        onClose={onClose}
        open={modalVisible}
        width={size.width}
      >
        <Hdw.Container>
          <Hdw.Close onClick={() => setModalVisible(false)}>
            <X size={32} weight="regular" color="#a8a8a8" />
          </Hdw.Close>
          <Hdw.Logo
            src={`${process.env.NEXT_PUBLIC_IP}${settings.logo.data.attributes.url}`}
          />
          <Hdw.Links>
            <Link href={"/"} onClick={() => setModalVisible(false)}>
              <Hdw.Element>ANA SAYFA</Hdw.Element>
            </Link>
            <Link href={"/hakkimizda"} onClick={() => setModalVisible(false)}>
              <Hdw.Element>HAKKIMIZDA</Hdw.Element>
            </Link>

            <Link href={"/hizmetlerimiz"} onClick={() => setModalVisible(false)}>
              <Hdw.Element>HİZMETLERİMİZ</Hdw.Element>
            </Link>

            
            <Link href={"/ekibimiz"} onClick={() => setModalVisible(false)}>
              <Hdw.Element>EKİBİMİZ</Hdw.Element>
            </Link>
            <Link href={"/makalelerimiz"} onClick={() => setModalVisible(false)}>
              <Hdw.Element>Makalelerimiz</Hdw.Element>
            </Link>
            <Link href={"/iletisim"} onClick={() => setModalVisible(false)}>
              <Hdw.Element>İLETİŞİM</Hdw.Element>
            </Link>
          </Hdw.Links>
          <Hdw.Row>
            <Link href={settings.instagram}>
              <Hdw.RowItem>
                <InstagramLogo size={32} />
              </Hdw.RowItem>
            </Link>
            <Link href={settings.facebook}>
              <Hdw.RowItem>
                <FacebookLogo size={32} />
              </Hdw.RowItem>
            </Link>
            <Link href={settings.whatsapp}>
              <Hdw.RowItem>
                <WhatsappLogo size={32} />
              </Hdw.RowItem>
            </Link>
            <Link href={settings.twitter}>
              <Hdw.RowItem>
                <TwitterLogo size={32} />
              </Hdw.RowItem>
            </Link>
          </Hdw.Row>
          <Hdw.Copyright>{settings.copyright}</Hdw.Copyright>
        </Hdw.Container>
      </Drawer>
    </>
  );
};

export default HeaderDrawer;
