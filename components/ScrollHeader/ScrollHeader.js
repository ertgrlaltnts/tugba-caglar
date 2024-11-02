import React, { useEffect } from "react";
import { Hdr, Element, Element2 } from "./style";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import { CaretDown } from "phosphor-react";
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
      <Hdr.MenuItem href="/hizmetlerimiz/aile-ve-bosanma-hukuku">
        Aile ve Boşanma Hukuku
      </Hdr.MenuItem>
    ),
  },

  {
    key: "1",
    label: (
      <Hdr.MenuItem href="/hizmetlerimiz/arabuluculuk">
        Arabuluculuk
      </Hdr.MenuItem>
    ),
  },

  {
    key: "1",
    label: (
      <Hdr.MenuItem href="/hizmetlerimiz/gayrimenkul-avukati">
        Gayrimenkul Avukatı
      </Hdr.MenuItem>
    ),
  },

  {
    key: "1",
    label: (
      <Hdr.MenuItem href="/hizmetlerimiz/sirketler-ve-ticaret-hukuku">
        Şirketler ve Ticaret Hukuku
      </Hdr.MenuItem>
    ),
  },

  {
    key: "1",
    label: (
      <Hdr.MenuItem href="/hizmetlerimiz/tazminat-hukuku">
        Tazminat Hukuku
      </Hdr.MenuItem>
    ),
  },
];

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: -50 },
};

const Header = ({ settings }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Hdr.Container
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="square"
    >
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
