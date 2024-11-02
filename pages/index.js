import React from "react";
import Head from "next/head";
import MobileHeaderScroll from "../components/MobileHeaderScroll/MobileHeaderScroll";
import ScrollNavbar from "../components/ScrollHeader/ScrollHeader";
import Footer from "../components/Footer/Footer";
import PageTransition from "@/components/PageTransition/PageTransition";
import ServiceBlock from "../components/ServiceBlock/ServiceBlock";
import PrincipleIcon from "/public/image/principle.png";
import HeaderDrawer from "@/components/HeaderDrawer/HeaderDrawer";
import { Col, Row } from "antd";
import { Hiz } from "@/styles/Hizmetlerimiz.style";
import { ArrowRight, Bank, ShieldCheck, Scroll } from "phosphor-react";
import { Hmp, ButtonIcon, ButtonRow, ButtonText } from "../styles/Home.style";
import { useWindowSize } from "@/helper/windowSize";
import WrapBlock from "@/components/WrapBlock/WrapBlock";
import Collapse from "@/components/Collapse";
import axios from "axios";
import Link from "next/link";
import { add3Dots } from "@/helper/add3dots";
import { Quicksand } from "@next/font/google";
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // İhtiyacınıza göre ağırlıkları ekleyin
});

export default function Home({ drawer, setDrawer, settings, blogs, general }) {
  const size = useWindowSize();

  return (
    <>
      <Head>
        <title>
          Trabzon Avukatlık & Arabuluculuk & Gayrimenkul Avukatlığı | Çağlar
          Hukuk ve Danışmanlık Bürosu
        </title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Trabzon’da gayrimenkul avukatlığı, kamulaştırma avukatlığı, tapu iptali ve ortaklığın giderilmesi davalarında uzman avukat. Haklarınızı savunmak için Çağlar Hukuk ve Danışmanlık bürosu olarak yanınızdayız."
        />
        <meta name="author" content="Av. Tuğba Çağlar" />
        <meta
          name="keywords"
          content="Trabzon avukat, trabzonda kamulaştırma avukatı, gayrimenkul hukuku, tapu iptali avukatı, trabzonda ortaklığın giderilmesi avukatı,trabzonda gayrimenkul avukatı, trabzoda arabulucu avukatı"
        />

        <meta
          property="og:title"
          content="Trabzon Avukatlık & Arabuluculuk & Gayrimenkul Avukatlığı | Çağlar
          Hukuk ve Danışmanlık Bürosu"
        />
        <meta
          property="og:description"
          content="Trabzon'da kamulaştırma ve gayrimenkul davalarında deneyimli avukatlık hizmetleri. Trabzon'da hukuki süreçlerde uzman danışmanlık."
        />
        <meta
          property="og:image"
          content="https://api.tugbacaglar.com/uploads/Adsiz_tasarim_1_2bf8aea1f2.webp"
        />
        <meta property="og:url" content="https://www.tugbacaglar.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Trabzon Avukatlık & Arabuluculuk & Gayrimenkul Avukatlığı | Çağlar
          Hukuk ve Danışmanlık Bürosu"
        />
        <meta
          name="twitter:description"
          content="Trabzon'da kamulaştırma ve gayrimenkul davalarında deneyimli avukatlık hizmetleri. Trabzon'da hukuki süreçlerde uzman danışmanlık."
        />
        <meta
          name="twitter:image"
          content="https://api.tugbacaglar.com/uploads/Adsiz_tasarim_1_2bf8aea1f2.webp"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.tugbacaglar.com" />
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
              image={`${process.env.NEXT_PUBLIC_IP}${settings.main_image.data.attributes.url}`}
            >
              <WrapBlock>
                <Hmp.TopTitle style={{ marginTop: 250 }}>
                  ÇAĞLAR HUKUK VE DANIŞMANLIK BÜROSU
                </Hmp.TopTitle>
                <Hmp.TopText style={{ marginTop: 10 }}>
                  AVUKAT TUĞBA ÇAĞLAR
                </Hmp.TopText>
              </WrapBlock>
            </Hmp.TopBlock>

            <Hmp.MidBlock>
              <Hmp.ActivityTitleRow2>
                <Hmp.Divider />
                <Hmp.ActivityTitle>Hizmetlerimiz</Hmp.ActivityTitle>
                <Hmp.Divider />
              </Hmp.ActivityTitleRow2>
              <Hmp.Services>
                <Row gutter={[32, 32]}>
                  {settings.hizmetlerimiz.map((item, index) => (
                    <Col key={index} xs={24} sm={24} md={12} lg={12} xl={8}>
                      <ServiceBlock isInfo={false} data={item} index={index} />
                    </Col>
                  ))}
                </Row>
              </Hmp.Services>

              <Hmp.Contact
                image={`${process.env.NEXT_PUBLIC_IP}${settings.banner.image.data.attributes.url}`}
                alt={`gayrimenkul-hukuku-trabzon`}
              >
                <WrapBlock>
                  <Hmp.ContactTextBlock>
                    <Hmp.ContactTitle>{settings.banner.title}</Hmp.ContactTitle>
                    <Hmp.ContactText>{settings.banner.text}</Hmp.ContactText>
                  </Hmp.ContactTextBlock>
                  <div style={{ marginBottom: 20 }}>
                    <Row>
                      <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <Hmp.ContactBlock
                          href={
                            "http://www.tugbacaglar.av.tr/wp-content/themes/z-tugbacaglar/pdf/brosur/#p=14"
                          }
                        >
                          <ShieldCheck
                            size={size.width > 426 ? 32 : 16}
                            weight="light"
                            color="#fff"
                            alt="shield"
                          />
                          <Hmp.ContactBlockText>
                            Koruyucu Danışmanlık Hizmeti
                          </Hmp.ContactBlockText>
                        </Hmp.ContactBlock>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <Hmp.ContactBlock href={"/posts/catalog"}>
                          <Scroll
                            size={size.width > 426 ? 32 : 16}
                            weight="light"
                            color="#fff"
                            alt="scroll"
                          />
                          <Hmp.ContactBlockText>
                            Hizmet Kataloğu
                          </Hmp.ContactBlockText>
                        </Hmp.ContactBlock>
                      </Col>

                      <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <Hmp.ContactBlock href={"/posts/investor"}>
                          <Bank
                            size={size.width > 426 ? 32 : 16}
                            weight="light"
                            color="#fff"
                            alt="bank"
                          />
                          <Hmp.ContactBlockText>
                            Yatırımcı Bilgi Formu
                          </Hmp.ContactBlockText>
                        </Hmp.ContactBlock>
                      </Col>
                    </Row>
                  </div>
                </WrapBlock>
              </Hmp.Contact>

              <Hmp.ActivityTitleRow2>
                <Hmp.Divider />
                <Hmp.ActivityTitle>Makalelerimiz</Hmp.ActivityTitle>
                <Hmp.Divider />
              </Hmp.ActivityTitleRow2>
              <Hiz.Container>
                <Row gutter={[8, 8]}>
                  {blogs.slice(0, 3).map((item, index) => (
                    <Col key={index} xs={24} sm={24} md={12} lg={12} xl={8}>
                      <Hiz.YaziBlock className={quicksand.className}>
                        <Hiz.YaziImage
                          src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.image.data.attributes.url}`}
                          alt={`tugba-caglar-makale-${index}`}
                        />
                        <Hiz.TextBlock>
                          <Link href={`/makalelerimiz/${item.attributes.slug}`}>
                            <Hiz.YaziTitle>
                              {item.attributes.title}
                            </Hiz.YaziTitle>
                          </Link>
                          <Hiz.YaziContent>
                            {add3Dots(item.attributes.meta_description, 150)}
                          </Hiz.YaziContent>
                          <Hiz.Button
                            href={`/makalelerimiz/${item.attributes.slug}`}
                          >
                            Devamını Oku
                          </Hiz.Button>
                        </Hiz.TextBlock>
                      </Hiz.YaziBlock>
                    </Col>
                  ))}
                </Row>
              </Hiz.Container>

              <Link
                href={"/makalelerimiz"}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <Hmp.ButtonMakale>Tüm Makalelerimizi Gör</Hmp.ButtonMakale>
              </Link>

              <WrapBlock>
                <Hmp.Activity>
                  <Hmp.Light
                    src={PrincipleIcon}
                    alt="tugba-caglar-prensipler"
                  />
                  <Hmp.ActivityTitleRow>
                    <Hmp.Divider />
                    <Hmp.ActivityTitle>
                      {settings.activity.title}
                    </Hmp.ActivityTitle>
                    <Hmp.Divider />
                  </Hmp.ActivityTitleRow>
                  <Hmp.ActivityText>{settings.activity.text}</Hmp.ActivityText>
                </Hmp.Activity>
              </WrapBlock>

              <Hmp.Services>
                <Collapse data={settings.collapse} />
              </Hmp.Services>

              <WrapBlock>
                <Hmp.Group>
                  <Hmp.ActivityTitleRow>
                    <Hmp.Divider />
                    <Hmp.ActivityTitle>Çözüm Ortaklarımız</Hmp.ActivityTitle>
                    <Hmp.Divider />
                  </Hmp.ActivityTitleRow>
                  <Hmp.Groups>
                    <Row gutter={[16, 16]}>
                      {settings.group.map((item, index) => (
                        <Col key={index} xs={24} sm={12} md={12} lg={8} xl={6}>
                          <Hmp.GroupItem>
                            <Hmp.GroupItemImage
                              src={`${process.env.NEXT_PUBLIC_IP}${item.image.data.attributes.url}`}
                              alt="cozum-ortaklarimiz"
                              width={300}
                              height={300}
                            />
                            <Hmp.GroupItemTitle>
                              {item.title}
                            </Hmp.GroupItemTitle>
                            <ButtonRow onClick={() => window.open(item.link)}>
                              <ButtonText>Devamını Gör</ButtonText>
                              <ButtonIcon>
                                <ArrowRight
                                  size={size.width > 768 ? 20 : 16}
                                  weight="bold"
                                  color="#bf8c41"
                                />
                              </ButtonIcon>
                            </ButtonRow>
                          </Hmp.GroupItem>
                        </Col>
                      ))}
                    </Row>
                  </Hmp.Groups>
                </Hmp.Group>
              </WrapBlock>

              <Hmp.Comment>
                <Hmp.CommentMiddle alt="tugba-caglar-alt">
                  <WrapBlock>
                    <Hmp.CommentTitle>AVUKAT TUĞBA ÇAĞLAR</Hmp.CommentTitle>
                    <Hmp.CommentSubTitle>
                      ''Yeni kitabımın müvekkillerime ve okurlarına faydalı
                      olması dileğiyle!''
                    </Hmp.CommentSubTitle>
                    <Hmp.CommentButtonRow>
                      <Hmp.Button
                        onClick={() =>
                          window.open(
                            "https://docs.google.com/viewerng/viewer?url=https://www.adaletyayinevi.com.tr/image/catalog/icndekiler/9786258092714.pdf"
                          )
                        }
                      >
                        Hemen İncele
                      </Hmp.Button>
                      <Hmp.Button
                        onClick={() =>
                          window.open(
                            "https://www.adaletyayinevi.com.tr/9786258092714"
                          )
                        }
                      >
                        Satın Al
                      </Hmp.Button>
                    </Hmp.CommentButtonRow>
                  </WrapBlock>
                </Hmp.CommentMiddle>
              </Hmp.Comment>
            </Hmp.MidBlock>
            <Footer settings={general} />
          </Hmp.Container>
        </PageTransition>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/home?populate=deep`
  );

  const response3 = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  const response5 = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/makales?populate=deep`
  );

  return {
    props: {
      settings: response.data.data.attributes,
      general: response3.data.data.attributes,
      blogs: response5.data.data,
    },
  };
}
