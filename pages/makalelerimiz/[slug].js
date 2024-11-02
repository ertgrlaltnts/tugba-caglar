import React, { useState, useEffect } from "react";
import Head from "next/head";
import ScrollNavbar from "@/components/ScrollHeader/ScrollHeader";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import Navbar from "@/components/Header/Header";
import MobileHeaderScroll from "@/components/MobileHeaderScroll/MobileHeaderScroll";
import PageTransition from "@/components/PageTransition/PageTransition";
import HeaderDrawer from "@/components/HeaderDrawer/HeaderDrawer";
import { Hmp } from "../../styles/Posts.style";
import Markdown from "markdown-to-jsx";
import { Col, Row } from "antd";
import Footer from "@/components/Footer/Footer";
import WrapBlock from "@/components/WrapBlock/WrapBlock";
import { Envelope, Phone } from "phosphor-react";
import axios from "axios";
import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // İhtiyacınıza göre ağırlıkları ekleyin
});

export default function Catalog({ drawer, setDrawer, general, data }) {
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
        <title>{`${data.title}`}</title>
        <meta name="description" content={`${data.meta_description}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <meta name="author" content="Av. Tuğba Çağlar" />

        <meta
          name="keywords"
          content="Trabzon avukat, kamulaştırma avukatı, gayrimenkul hukuku, tapu iptali avukatı"
        ></meta>

        <link
          rel="canonical"
          href={`https://www.tugbacaglar.com/makalelerimiz/${data.slug}`}
        ></link>

        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.meta_description} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_IP}${data.image.data.attributes.url}`}
        />
        <meta
          property="og:url"
          content={`https://www.tugbacaglar.com/makalelerimiz/${data.slug}`}
        />
        <meta property="og:type" content="article" />
        {data.words.map((item, index) => (
          <meta key={index} property="article:tag" content={item} />
        ))}

        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={quicksand.className}>
        <PageTransition>
          <HeaderDrawer
            modalVisible={drawer}
            setModalVisible={setDrawer}
            settings={general}
          />
          <Hmp.Container>
            <ScrollNavbar settings={general} />

            <MobileHeaderScroll
              setModalVisible={setDrawer}
              settings={general}
            />

            <Hmp.TopBlock
              image={`${process.env.NEXT_PUBLIC_IP}${general.breadcrumb.data.attributes.url}`}
            >
              <WrapBlock>
                <Hmp.TextTitle>{data.title}</Hmp.TextTitle>
              </WrapBlock>
            </Hmp.TopBlock>

            <Hmp.Block >
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                  <Hmp.BlockItem>
                    <Hmp.Image
                      src={`${process.env.NEXT_PUBLIC_IP}${data.image.data.attributes.url}`}
                      alt={`tugba-caglar-makale-${data.slug}`}
                      width={600}
                      height={300}
                      priority
                    />
                    <Markdown className={quicksand.className}>{data.content}</Markdown>
                  </Hmp.BlockItem>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                  <Hmp.BlockItem2>
                    <Hmp.Title2>İletişim</Hmp.Title2>
                    <Hmp.Element>
                      <Phone size={25} color="#000" />
                      <Hmp.ElementText>{general.phone}</Hmp.ElementText>
                      <div></div>
                    </Hmp.Element>

                    <Hmp.Element>
                      <Phone size={25} color="#000" />
                      <Hmp.ElementText>{general.phone2}</Hmp.ElementText>
                      <div></div>
                    </Hmp.Element>

                    <Hmp.Element>
                      <Envelope size={25} color="#000" />
                      <Hmp.ElementText>{general.mail}</Hmp.ElementText>
                      <div></div>
                    </Hmp.Element>

                    <Hmp.Button href={"/contact"}>Hızlı İletişim</Hmp.Button>
                  </Hmp.BlockItem2>

                  <Hmp.BlockItem3 className={quicksand.className}>
                    <Hmp.Title2>Etiketler</Hmp.Title2>
                    {data.words.map((item, index) => (
                      <Hmp.Keys key={index}>{item}</Hmp.Keys>
                    ))}
                  </Hmp.BlockItem3>
                </Col>
              </Row>
            </Hmp.Block>
          </Hmp.Container>
          <Footer settings={general} />
        </PageTransition>
      </main>
    </>
  );
}

const fetchAllSlugs = async () => {
  const slugs = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/makales?populate=deep`
  );

  return slugs.data.data.map((item) => item.attributes.slug);
};

export async function getStaticPaths() {
  const slugs = await fetchAllSlugs();

  const paths = slugs.map((slug) => ({
    params: { slug }, // Bu kısım, slug parametresini dinamik hale getirir
  }));

  return {
    paths,
    fallback: false, // slug bulunamazsa 404 verir
  };
}

export async function getStaticProps({ params }) {
  const response3 = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/makales?filters[slug][$eq]=${params.slug}&populate=deep`
  );
  return {
    props: {
      general: response3.data.data.attributes,
      data: response.data.data[0].attributes,
    },
    revalidate: 10,
  };
}
