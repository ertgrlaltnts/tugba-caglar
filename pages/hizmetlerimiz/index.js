import Head from "next/head";
import Navbar from "@/components/Header/Header";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import MobileHeaderScroll from "../../components/MobileHeaderScroll/MobileHeaderScroll";
import ScrollNavbar from "../../components/ScrollHeader/ScrollHeader";
import HeaderDrawer from "@/components/HeaderDrawer/HeaderDrawer";
import Footer from "../../components/Footer/Footer";
import { Col, Row } from "antd";
import WrapBlock from "@/components/WrapBlock/WrapBlock";
import PageTransition from "@/components/PageTransition/PageTransition";
import React, { useState, useEffect } from "react";
import { Hiz } from "../../styles/Hizmetlerimiz.style";
import axios from "axios";
import Link from "next/link";

export default function About({ drawer, setDrawer, blogs, general, settings }) {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);
  return (
    <>
      <Head>
        <title>Hizmetlerimiz | Çağlar Hukuk ve Danışmanlık Bürosu</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Trabzon’da kamulaştırma, tapu iptali, ortaklığın giderilmesi, izaleyi şuyu ve gayrimenkul davaları gibi alanlarda uzman avukatlık hizmetlerimizle tanışın."
        />
        <meta name="author" content="Av. Tuğba Çağlar" />
        <meta
          name="keywords"
          content="Trabzon avukat, kamulaştırma avukatı, tapu iptali avukatı, gayrimenkul avukatı, ortaklığın giderilmesi, Trabzon izaleyi şuyu, Trabzon hukuk hizmetleri"
        />
        <meta
          property="og:title"
          content="Hizmetlerimiz | Çağlar Hukuk ve Danışmanlık Bürosu"
        />
        <meta
          property="og:description"
          content="Trabzon’da kamulaştırma, tapu iptali, ortaklığın giderilmesi, izaleyi şuyu ve gayrimenkul davaları gibi alanlarda uzman avukatlık hizmetlerimizle tanışın."
        />
        <meta
          property="og:image"
          content="https://api.tugbacaglar.com/uploads/logowhite25_88b478cc0b.png"
        />
        <meta
          property="og:url"
          content="https://www.tugbacaglar.com/hizmetlerimiz"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hizmetlerimiz | Çağlar Hukuk ve Danışmanlık Bürosu"
        />
        <meta
          name="twitter:description"
          content="Trabzon’da kamulaştırma, tapu iptali, ortaklığın giderilmesi, izaleyi şuyu ve gayrimenkul davaları gibi alanlarda uzman avukatlık hizmetlerimizle tanışın."
        />
        <meta
          name="twitter:image"
          content="https://api.tugbacaglar.com/uploads/logowhite25_88b478cc0b.png"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://www.tugbacaglar.com/hizmetlerimiz"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <PageTransition>
          <HeaderDrawer
            modalVisible={drawer}
            setModalVisible={setDrawer}
            settings={general}
          />

          <ScrollNavbar settings={general} />

          <MobileHeaderScroll setModalVisible={setDrawer} settings={general} />

          <Hiz.TopBlock
            image={`${process.env.NEXT_PUBLIC_IP}${settings.background.data.attributes.url}`}
          >
            <WrapBlock>
              <Hiz.TextTitle>Hizmetlerimiz</Hiz.TextTitle>
            </WrapBlock>
          </Hiz.TopBlock>
          <Hiz.Container>
            <Row gutter={[8, 8]}>
              {blogs.map((item, index) => (
                <Col key={index} xs={24} sm={24} md={12} lg={12} xl={8}>
                  <Hiz.YaziBlock>
                    <Hiz.YaziImage
                      src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.image.data.attributes.url}`}
                      alt={`tugba-caglar-hizmetlerimiz-${item.attributes.slug}`}
                    />
                    <Hiz.TextBlock>
                      <Link href={`/hizmetlerimiz/${item.attributes.slug}`}>
                        <Hiz.YaziTitle>{item.attributes.title}</Hiz.YaziTitle>
                      </Link>
                      <Hiz.YaziContent>
                        {item.attributes.meta_description}
                      </Hiz.YaziContent>
                      <Hiz.Button
                        href={`/hizmetlerimiz/${item.attributes.slug}`}
                      >
                        Devamını Oku
                      </Hiz.Button>
                    </Hiz.TextBlock>
                  </Hiz.YaziBlock>
                </Col>
              ))}
            </Row>
          </Hiz.Container>
          <Footer settings={general} />
        </PageTransition>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/hizmetlerimizs?populate=deep`
  );

  const response2 = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/about?populate=deep`
  );

  const response3 = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return {
    props: {
      settings: response2.data.data.attributes,
      blogs: response.data.data,
      general: response3.data.data.attributes,
    },
    revalidate: 10,
  };
}
