import React, { useState, useEffect } from "react";
import { Hdr, Element, Element2 } from "./style";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  Phone,
  WhatsappLogo,
  CaretDown,
} from "phosphor-react";
import { Dropdown, Space } from "antd";
import Link from "next/link";

const items = [
  {
    key: "1",
    label: (
      <Hdr.MenuItem href="/hizmetlerimiz/ceza-hukuku">Ceza Hukuku</Hdr.MenuItem>
    ),
  },

  {
    key: "1",
    label: (
      <Hdr.MenuItem href="/hizmetlerimiz/aile-ve-bosanma-hukuku">Aile ve Boşanma Hukuku</Hdr.MenuItem>
    ),
  },

  {
    key: "1",
    label: (
      <Hdr.MenuItem href="/hizmetlerimiz/arabuluculuk">Arabuluculuk</Hdr.MenuItem>
    ),
  },

  {
    key: "1",
    label: (
      <Hdr.MenuItem href="/hizmetlerimiz/gayrimenkul-avukati">Gayrimenkul Avukatı</Hdr.MenuItem>
    ),
  },

  {
    key: "1",
    label: (
      <Hdr.MenuItem href="/hizmetlerimiz/sirketler-ve-ticaret-hukuku">Şirketler ve Ticaret Hukuku</Hdr.MenuItem>
    ),
  },

  {
    key: "1",
    label: (
      <Hdr.MenuItem href="/hizmetlerimiz/tazminat-hukuku">Tazminat Hukuku</Hdr.MenuItem>
    ),
  },
];

const Header = ({ isPost, settings }) => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <Hdr.Container isPost={isPost}>
      <Hdr.TopHeader>
        <Hdr.TopHeaderRow>
          <Hdr.Social>
            <Link href={settings.facebook}>
              <FacebookLogo size={24} weight="regular" color="#fff" />
            </Link>
          </Hdr.Social>
          <Hdr.Social>
            <Link href={settings.instagram}>
              <InstagramLogo size={24} weight="regular" color="#fff" />
            </Link>
          </Hdr.Social>
          <Hdr.Social>
            <Link href={settings.twitter}>
              <TwitterLogo size={24} weight="regular" color="#fff" />
            </Link>
          </Hdr.Social>
        </Hdr.TopHeaderRow>
        <Link href={settings.whatsapp}>
          <Hdr.TopHeaderRow>
            <Hdr.Number>Whatsapp</Hdr.Number>
            <Hdr.Social2>
              <WhatsappLogo size={24} weight="regular" color="#fff" />
            </Hdr.Social2>
          </Hdr.TopHeaderRow>
        </Link>
      </Hdr.TopHeader>
      <Hdr.BottomHeader>
        <Hdr.BottomHeaderRow>
          <Element href={"/"}>Ana Sayfa</Element>
          <Element href={"/hakkimizda"}>Hakkımızda</Element>

          <Dropdown
            menu={{
              items,
            }}
          >
            <a href={"/hizmetlerimiz"}>
              <Element2>
                <Space>
                  Hizmetlerimiz
                  <CaretDown size={20} style={{ marginTop: 3 }} />
                </Space>
              </Element2>
            </a>
          </Dropdown>
        </Hdr.BottomHeaderRow>
        <Link href={"/"}>
          <Hdr.Logo
            src={`${process.env.NEXT_PUBLIC_IP}${settings.logo.data.attributes.url}`}
            alt="tugba-caglar-logo"
          />
        </Link>
        <Hdr.BottomHeaderRow>
          <Element href={"/ekibimiz"}>Ekibimiz</Element>
          <Element href={"/makalelerimiz"}>Makalelerimiz</Element>
          <Element href={"/iletisim"}>İletişim</Element>
        </Hdr.BottomHeaderRow>
      </Hdr.BottomHeader>
    </Hdr.Container>
  );
};

export default Header;
