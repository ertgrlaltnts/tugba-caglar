import Head from "next/head";
import Navbar from "@/components/Header/Header";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import MobileHeaderScroll from "../components/MobileHeaderScroll/MobileHeaderScroll";
import ScrollNavbar from "../components/ScrollHeader/ScrollHeader";
import Footer from "../components/Footer/Footer";
import HeaderDrawer from "@/components/HeaderDrawer/HeaderDrawer";
import { Phone, Envelope, MapPin, Printer, FacebookLogo } from "phosphor-react";
import { Cnt } from "../styles/Contact.style";
import WrapBlock from "@/components/WrapBlock/WrapBlock";
import PageTransition from "@/components/PageTransition/PageTransition";
import { notification } from "antd";
import React, { useState, useEffect } from "react";
import { sendContactForm } from "../lib/api";
import axios from "axios";

export default function Contact({ drawer, setDrawer, contact, settings }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  const successNotification = () => {
    notification.success({
      message: "Mesajınız başarıyla gönderildi",
    });
  };

  const errorNotification = (message) => {
    notification.error({
      message: message,
    });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const sendMail = async () => {
    setButtonDisabled(true);
    if (
      name.length === 0 ||
      email.length === 0 ||
      subject.length === 0 ||
      message.length === 0
    ) {
      errorNotification("Kutular boş bırakılamaz");
    } else if (validateEmail(email) === null) {
      errorNotification("Geçersiz email adresi");
    } else {
      const data = {
        name,
        email,
        subject,
        message,
      };
      await sendContactForm(data);
      successNotification();
    }
    setTimeout(() => {
      setButtonDisabled(false);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>İletişim | Çağlar Hukuk ve Danışmanlık Bürosu</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Trabzon'da uzman avukatlık hizmetlerimize ulaşmak için iletişim bilgilerimiz burada. Telefon, e-posta veya form yoluyla bizimle kolayca iletişime geçin."
        />
        <meta name="author" content="Av. Tuğba Çağlar" />

        <meta
          property="og:title"
          content="İletişim | Çağlar Hukuk ve Danışmanlık Bürosu"
        />
        <meta
          property="og:description"
          content="Trabzon'da uzman avukatlık hizmetlerimize ulaşmak için iletişim bilgilerimiz burada. Telefon, e-posta veya form yoluyla bizimle kolayca iletişime geçin."
        />
        <meta
          property="og:image"
          content="https://api.tugbacaglar.com/uploads/Adsiz_tasarim_3af97c7145.webp"
        />
        <meta
          property="og:url"
          content="https://www.tugbacaglar.com/iletisim"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="İletişim | Çağlar Hukuk ve Danışmanlık Bürosu"
        />
        <meta
          name="twitter:description"
          content="Trabzon'da uzman avukatlık hizmetlerimize ulaşmak için iletişim bilgilerimiz burada. Telefon, e-posta veya form yoluyla bizimle kolayca iletişime geçin."
        />
        <meta
          name="twitter:image"
          content="https://api.tugbacaglar.com/uploads/Adsiz_tasarim_3af97c7145.webp"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.tugbacaglar.com/iletisim" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <PageTransition>
          <HeaderDrawer
            modalVisible={drawer}
            setModalVisible={setDrawer}
            settings={settings}
          />
          <Cnt.Container>
            {small ? (
              <ScrollNavbar settings={settings} />
            ) : (
              <Navbar settings={settings} />
            )}
            {small ? (
              <MobileHeaderScroll
                setModalVisible={setDrawer}
                settings={settings}
              />
            ) : (
              <MobileHeader setModalVisible={setDrawer} settings={settings} />
            )}
            <Cnt.TopBlock
              image={`${process.env.NEXT_PUBLIC_IP}${contact.background.data.attributes.url}`}
            >
              <Cnt.AlignCenter>
                <WrapBlock>
                  <Cnt.TextTitle>İletişim</Cnt.TextTitle>
                  <Cnt.RightContainer>
                    <Cnt.RightElement>
                      <Cnt.Icon>
                        <Phone size={32} weight="regular" color="#fff" />
                      </Cnt.Icon>
                      <Cnt.ElementText>{settings.phone}</Cnt.ElementText>
                    </Cnt.RightElement>

                    <Cnt.RightElement>
                      <Cnt.Icon>
                        <MapPin size={32} weight="regular" color="#fff" />
                      </Cnt.Icon>
                      <Cnt.ElementText>{settings.address}</Cnt.ElementText>
                    </Cnt.RightElement>

                    <Cnt.RightElement>
                      <Cnt.Icon>
                        <MapPin size={32} weight="regular" color="#fff" />
                      </Cnt.Icon>
                      <Cnt.ElementText>
                        <div style={{ fontWeight: "bold" }}>
                          Arabuluculuk Bürosu:
                        </div>{" "}
                        {settings.mediation_office}
                      </Cnt.ElementText>
                    </Cnt.RightElement>

                    <Cnt.RightElement>
                      <Cnt.Icon>
                        <Printer size={32} weight="regular" color="#fff" />
                      </Cnt.Icon>
                      <Cnt.ElementText>{settings.phone2}</Cnt.ElementText>
                    </Cnt.RightElement>

                    <Cnt.RightElement>
                      <Cnt.Icon>
                        <Envelope size={32} weight="regular" color="#fff" />
                      </Cnt.Icon>
                      <Cnt.ElementText>{settings.mail}</Cnt.ElementText>
                    </Cnt.RightElement>

                    <Cnt.RightElement>
                      <Cnt.Icon>
                        <FacebookLogo size={32} weight="regular" color="#fff" />
                      </Cnt.Icon>
                      <Cnt.ElementText>{settings.facebook}</Cnt.ElementText>
                    </Cnt.RightElement>
                  </Cnt.RightContainer>
                </WrapBlock>
              </Cnt.AlignCenter>
            </Cnt.TopBlock>

            <WrapBlock>
              <Cnt.MidBlock>
                <Cnt.Margin>
                  <Cnt.Left>
                    <Cnt.LeftTitle>İletişim ve Başvuru Formu</Cnt.LeftTitle>
                    <Cnt.InputBox>
                      <Cnt.InputTitle>Adınız & Soyadınız</Cnt.InputTitle>
                      <Cnt.Input
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Adınız & Soyadınız"
                      />
                    </Cnt.InputBox>

                    <Cnt.InputBox>
                      <Cnt.InputTitle>E-mail Adresiniz</Cnt.InputTitle>
                      <Cnt.Input
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Adresiniz"
                      />
                    </Cnt.InputBox>

                    <Cnt.InputBox>
                      <Cnt.InputTitle>Konu</Cnt.InputTitle>
                      <Cnt.Input
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Konu"
                      />
                    </Cnt.InputBox>

                    <Cnt.InputBox>
                      <Cnt.InputTitle>Mesajınız</Cnt.InputTitle>
                      <Cnt.InputArea
                        onChange={(e) => setMessage(e.target.value)}
                        rows={8}
                        placeholder="Mesajınız"
                      />
                    </Cnt.InputBox>
                    <Cnt.More disabled={buttonDisabled} onClick={sendMail}>
                      Gönder
                    </Cnt.More>
                  </Cnt.Left>
                  <Cnt.Right>
                    <Cnt.Map
                      title="location"
                      src={settings.map}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    />
                  </Cnt.Right>
                </Cnt.Margin>
              </Cnt.MidBlock>
            </WrapBlock>
            <Footer settings={settings} />
          </Cnt.Container>
        </PageTransition>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/contact?populate=deep`
  );

  const response3 = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );
  return {
    props: {
      contact: response.data.data.attributes,
      settings: response3.data.data.attributes,
    },
    revalidate: 10,
  };
}
