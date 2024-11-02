import React, { useState, useEffect } from "react";
import Head from "next/head";
import ScrollNavbar from "@/components/ScrollHeader/ScrollHeader";
import MobileHeaderScroll from "@/components/MobileHeaderScroll/MobileHeaderScroll";
import PageTransition from "@/components/PageTransition/PageTransition";
import HeaderDrawer from "@/components/HeaderDrawer/HeaderDrawer";
import { Hmp } from "../../styles/Posts.style";
import Catalog1 from "../../public/image/brosur1.jpg";
import Catalog2 from "../../public/image/brosur2.jpg";
import { Col, Row } from "antd";
import Footer from "@/components/Footer/Footer";
import { Envelope, Phone } from "phosphor-react";
import axios from "axios";

const Catalog = ({ drawer, setDrawer, settings }) => {
  return (
    <>
      <Head>
        <title>Tuğba Çağlar - Katalog</title>
        <meta
          name="description"
          content="Tuğba Çağlar Hukuk Bürosu: Danışmanlık, arabuluculuk ve hukuki destek hizmetleri ile çözüm odaklı yaklaşımlar sunuyoruz. Profesyonel hukuki rehberlik için bize ulaşın."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <PageTransition>
          <HeaderDrawer
            modalVisible={drawer}
            setModalVisible={setDrawer}
            settings={settings}
          />
          <ScrollNavbar settings={settings} />
          <MobileHeaderScroll setModalVisible={setDrawer} settings={settings} />
          <Hmp.TopBlock
            image={`${process.env.NEXT_PUBLIC_IP}${settings.breadcrumb.data.attributes.url}`}
          >
      
              <Hmp.TextTitle>Hizmet Kataloğu</Hmp.TextTitle>
     
          </Hmp.TopBlock>

          <Hmp.Container>
            <Hmp.Block>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                  <Hmp.BlockItem>
                    <Hmp.ImageBlock>
                      <Hmp.Image src={Catalog1} />
                    </Hmp.ImageBlock>
                    <Hmp.ImageBlock>
                      <Hmp.Image src={Catalog2} />
                    </Hmp.ImageBlock>
                  </Hmp.BlockItem>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                  <Hmp.BlockItem2>
                    <Hmp.Title2>İletişim</Hmp.Title2>
                    <Hmp.Element>
                      <Phone size={25} color="#000" />
                      <Hmp.ElementText>{settings.phone}</Hmp.ElementText>
                      <div></div>
                    </Hmp.Element>

                    <Hmp.Element>
                      <Phone size={25} color="#000" />
                      <Hmp.ElementText>{settings.phone2}</Hmp.ElementText>
                      <div></div>
                    </Hmp.Element>

                    <Hmp.Element>
                      <Envelope size={25} color="#000" />
                      <Hmp.ElementText>{settings.mail}</Hmp.ElementText>
                      <div></div>
                    </Hmp.Element>

                    <Hmp.Button href={"/contact"}>Hızlı İletişim</Hmp.Button>
                  </Hmp.BlockItem2>
                </Col>
              </Row>
            </Hmp.Block>
          </Hmp.Container>
          <Footer settings={settings} />
        </PageTransition>
      </main>
    </>
  );
};

export default Catalog;

export async function getStaticProps() {
  const response3 = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return {
    props: {
      settings: response3.data.data.attributes,
    },
    revalidate: 10,
  };
}
