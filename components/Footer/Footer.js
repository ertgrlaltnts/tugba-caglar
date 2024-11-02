import React from "react";
import { Ftr } from "./style";
import {
  Envelope,
  Phone,
  MapPin,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "phosphor-react";
import { Row, Col } from "antd";
import { useWindowSize } from "@/helper/windowSize";

const Footer = ({ settings }) => {
  const size = useWindowSize();
  return (
    <Ftr.Container>
      <Row gutter={[8, 8]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={6}>
          <Ftr.LogoContainer>
            <Ftr.Logo
              src={`${process.env.NEXT_PUBLIC_IP}${settings.logo.data.attributes.url}`}
            />
          </Ftr.LogoContainer>
        </Col>
        <Col xs={12} sm={12} md={8} lg={8} xl={6}>
          <Ftr.Contact>
            <Ftr.Title>Bize Ulaşın</Ftr.Title>

            <Ftr.ContactElement>
              <Envelope
                size={size.width > 476 ? 24 : 18}
                weight="fill"
                color="#bf8c41"
              />
              <Ftr.ContactText>{settings.mail}</Ftr.ContactText>
            </Ftr.ContactElement>

            <Ftr.ContactElement>
              <Phone size={size.width > 476 ? 24 : 18} color="#bf8c41" />
              <Ftr.ContactText>{settings.phone}</Ftr.ContactText>
            </Ftr.ContactElement>

            <Ftr.ContactElement>
              <Phone size={size.width > 476 ? 24 : 18} color="#bf8c41" />
              <Ftr.ContactText>{settings.phone2}</Ftr.ContactText>
            </Ftr.ContactElement>
          </Ftr.Contact>
        </Col>

        <Col xs={12} sm={12} md={8} lg={8} xl={6}>
          <Ftr.Contact>
            <Ftr.Title>Hizmetlerimiz</Ftr.Title>
            <Ftr.LinkText href={"/hizmetlerimiz/ceza-hukuku"}>Ceza Hukuku</Ftr.LinkText>
            <Ftr.LinkText href={"/hizmetlerimiz/aile-ve-bosanma-hukuku"}>Aile ve Boşanma Hukuku</Ftr.LinkText>
            <Ftr.LinkText href={"/hizmetlerimiz/arabuluculuk"}>Arabuluculuk</Ftr.LinkText>
            <Ftr.LinkText href={"/hizmetlerimiz/gayrimenkul-avukati"}>Gayrimenkul Avukatı</Ftr.LinkText>
            <Ftr.LinkText href={"/hizmetlerimiz/sirketler-ve-ticaret-hukuku"}>Şirketler ve Ticaret Hukuku</Ftr.LinkText>
            <Ftr.LinkText href={"/hizmetlerimiz/tazminat-hukuku"}>Tazminat Hukuku</Ftr.LinkText>
          </Ftr.Contact>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <Ftr.SocialMedia>
            <Ftr.Title>Bizi Takip Edin</Ftr.Title>

            <Ftr.IconRow>
              <Ftr.Icon href={settings.instagram}>
                <InstagramLogo
                  size={size.width > 476 ? 24 : 18}
                  color="#bf8c41"
                />
              </Ftr.Icon>
              <Ftr.Icon href={settings.facebook}>
                <FacebookLogo
                  size={size.width > 476 ? 24 : 18}
                  color="#bf8c41"
                />
              </Ftr.Icon>
              <Ftr.Icon href={settings.twitter}>
                <TwitterLogo
                  size={size.width > 476 ? 24 : 18}
                  color="#bf8c41"
                />
              </Ftr.Icon>
            </Ftr.IconRow>
            <Ftr.Copyright>{settings.copyright}</Ftr.Copyright>
          </Ftr.SocialMedia>
        </Col>
      </Row>
    </Ftr.Container>
  );
};

export default Footer;
