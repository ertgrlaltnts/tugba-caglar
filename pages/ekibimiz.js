import Head from "next/head";
import Navbar from "@/components/Header/Header";
import Footer from "../components/Footer/Footer";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import MobileHeaderScroll from "../components/MobileHeaderScroll/MobileHeaderScroll";
import ScrollNavbar from "../components/ScrollHeader/ScrollHeader";
import HeaderDrawer from "@/components/HeaderDrawer/HeaderDrawer";
import { Carousel } from "antd";
import React, { useState, useEffect } from "react";
import { Vsn } from "../styles/Vision.style";
import WrapBlock from "@/components/WrapBlock/WrapBlock";
import PageTransition from "@/components/PageTransition/PageTransition";
import axios from "axios";
import { Envelope, Phone } from "phosphor-react";
import { Prl } from "../styles/Products.style";

import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // İhtiyacınıza göre ağırlıkları ekleyin
});

export default function Vision({ drawer, setDrawer, settings, general }) {
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
        <title>Ekibimiz | Çağlar Hukuk ve Danışmanlık Bürosu</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Hukuk alanında deneyimli ekibimizle tanışın. Trabzon’da gayrimenkul, kamulaştırma ve tapu davalarında uzman avukat kadromuzla yanınızdayız."
        />
        <meta name="author" content="Av. Tuğba Çağlar" />

        <meta
          property="og:title"
          content="Ekibimiz | Çağlar Hukuk ve Danışmanlık Bürosu"
        />
        <meta
          property="og:description"
          content="Hukuk alanında deneyimli ekibimizle tanışın. Trabzon’da gayrimenkul, kamulaştırma ve tapu davalarında uzman avukat kadromuzla yanınızdayız."
        />
        <meta
          property="og:image"
          content="http://localhost:3002/_next/static/media/bookbanner.c692c0b8.webp"
        />
        <meta
          property="og:url"
          content="https://www.tugbacaglar.com/ekibimiz"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ekibimiz | Çağlar Hukuk ve Danışmanlık Bürosu"
        />
        <meta
          name="twitter:description"
          content="Hukuk alanında deneyimli ekibimizle tanışın. Trabzon’da gayrimenkul, kamulaştırma ve tapu davalarında uzman avukat kadromuzla yanınızdayız."
        />
        <meta
          name="twitter:image"
          content="http://localhost:3002/_next/static/media/bookbanner.c692c0b8.webp"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.tugbacaglar.com/ekibimiz" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={quicksand.className}>
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
              <Prl.TextTitle>Ekibimiz</Prl.TextTitle>
            </WrapBlock>
          </Prl.TopBlock>

          <Carousel draggable autoplay autoplaySpeed={5000} arrows>
            {settings.slider.map((item, index) => (
              <Vsn.TopBlock key={index}>
                <WrapBlock>
                  <Vsn.AlignCenter className={quicksand.className}>
                    <Vsn.ImageBlock>
                      <Vsn.Image
                        src={`${process.env.NEXT_PUBLIC_IP}${item.image.data.attributes.url}`}
                        alt={`tugba-caglar-ekibimiz-${index}`}
                      />
                    </Vsn.ImageBlock>
                    <Vsn.TextBlock>
                      <Vsn.TextTitle>{item.title}</Vsn.TextTitle>
                      <Vsn.TextSubTitle style={{ color: "#000" }}>
                        {item.subtitle}
                      </Vsn.TextSubTitle>
                      <Vsn.Text style={{ color: "#000" }}>{item.text}</Vsn.Text>
                      <Vsn.Info>
                        <Vsn.InfoTitle style={{ color: "#000" }}>
                          Eğitimler
                        </Vsn.InfoTitle>
                        <Vsn.InfoText style={{ color: "#000" }}>
                          {item.education}
                        </Vsn.InfoText>

                        <Vsn.InfoTitle style={{ color: "#000" }}>
                          Üyelikler ve Sertifikalar
                        </Vsn.InfoTitle>
                        <Vsn.InfoText style={{ color: "#000" }}>
                          {item.certificate}
                        </Vsn.InfoText>
                      </Vsn.Info>
                      <Vsn.ContactRow>
                        <Vsn.Contact>
                          <Vsn.Icon>
                            <Phone size={20} color="#000" />
                          </Vsn.Icon>
                          <Vsn.ContactText style={{ color: "#000" }}>
                            {item.phone}
                          </Vsn.ContactText>
                        </Vsn.Contact>

                        <Vsn.Contact style={{ marginLeft: 50 }}>
                          <Vsn.Icon>
                            <Envelope size={20} color="#000" />
                          </Vsn.Icon>
                          <Vsn.ContactText style={{ color: "#000" }}>
                            {item.mail}
                          </Vsn.ContactText>
                        </Vsn.Contact>
                      </Vsn.ContactRow>
                    </Vsn.TextBlock>
                  </Vsn.AlignCenter>
                </WrapBlock>
              </Vsn.TopBlock>
            ))}
          </Carousel>
          <Footer settings={general} />
        </PageTransition>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/team?populate=deep`
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
