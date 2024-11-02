import Head from "next/head";
import Navbar from "@/components/Header/Header";
import MobileHeader from "../components/MobileHeader/MobileHeader";
import MobileHeaderScroll from "../components/MobileHeaderScroll/MobileHeaderScroll";
import ScrollNavbar from "../components/ScrollHeader/ScrollHeader";
import HeaderDrawer from "@/components/HeaderDrawer/HeaderDrawer";
import Footer from "../components/Footer/Footer";
import { Carousel } from "antd";
import { Abt } from "../styles/About.style";
import WrapBlock from "@/components/WrapBlock/WrapBlock";
import PageTransition from "@/components/PageTransition/PageTransition";
import React, { useState, useEffect } from "react";
import { Prl } from "../styles/Products.style";
import axios from "axios";
import Markdown from "markdown-to-jsx";

export default function About({ drawer, setDrawer, settings, general }) {
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
        <title>Hakkımızda | Çağlar Hukuk ve Danışmanlık Bürosu</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Trabzon’da kamulaştırma, tapu iptali, ortaklığın giderilmesi ve gayrimenkul davalarında uzman avukatlık hizmeti sunan güvenilir bir hukuk bürosuyuz."
        />
        <meta name="author" content="Av. Tuğba Çağlar" />

        <meta
          property="og:title"
          content="Hakkımızda | Çağlar Hukuk ve Danışmanlık Bürosu"
        />
        <meta
          property="og:description"
          content="Trabzon’da kamulaştırma, tapu iptali, ortaklığın giderilmesi ve gayrimenkul davalarında uzman avukatlık hizmeti sunan güvenilir bir hukuk bürosuyuz."
        />
        <meta
          property="og:image"
          content="https://api.tugbacaglar.com/uploads/logowhite25_88b478cc0b.png"
        />
        <meta
          property="og:url"
          content="https://www.tugbacaglar.com/hakkimizda"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hakkımızda | Çağlar Hukuk ve Danışmanlık Bürosu"
        />
        <meta
          name="twitter:description"
          content="Trabzon’da kamulaştırma, tapu iptali, ortaklığın giderilmesi ve gayrimenkul davalarında uzman avukatlık hizmeti sunan güvenilir bir hukuk bürosuyuz."
        />
        <meta
          name="twitter:image"
          content="https://api.tugbacaglar.com/uploads/logowhite25_88b478cc0b.png"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.tugbacaglar.com/hakkimizda" />
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

          <Prl.TopBlock
            image={`${process.env.NEXT_PUBLIC_IP}${settings.background.data.attributes.url}`}
          >
            <WrapBlock>
              <Prl.TextTitle>Hakkımızda</Prl.TextTitle>
            </WrapBlock>
          </Prl.TopBlock>
          <br />
          <br />
          {settings.slider.map((item, index) => (
            <WrapBlock key={index}>
              <Abt.TopBlock>
                <Abt.AlignCenter>
                  <Abt.ImageBlock>
                    <Abt.Image
                      src={`${process.env.NEXT_PUBLIC_IP}${item.image.data.attributes.url}`}
                    />
                  </Abt.ImageBlock>
                  <Abt.TextBlock>
                    <Abt.TextTitle>{item.title}</Abt.TextTitle>
                    <Abt.Text style={{ color: "#000" }}>
                      <Markdown>{item.text}</Markdown>
                    </Abt.Text>
                  </Abt.TextBlock>
                </Abt.AlignCenter>
              </Abt.TopBlock>
            </WrapBlock>
          ))}

          <br />
          <br />

          <Footer settings={general} />
        </PageTransition>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/about?populate=deep`
  );

  const response3 = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return {
    props: {
      settings: response.data.data.attributes,
      general: response3.data.data.attributes,
    },
    revalidate: 10,
  };
}
