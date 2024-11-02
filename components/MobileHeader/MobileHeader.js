import React from "react";
import { Shr, Element } from "./style";
import { List, Phone, WhatsappLogo } from "phosphor-react";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import Link from "next/link";
import { useSelector } from "react-redux";

const MobileHeader = ({ setModalVisible, isPost, isSmall, settings }) => {
  return (
    <Shr.Container isSmall={isSmall} isPost={isPost}>
      <Shr.TopHeader>
        <Shr.TopHeaderRow>
          <Link href={settings.facebook}>
            <Shr.Social>
              <FacebookLogo size={18} weight="regular" color="#fff" />
            </Shr.Social>
          </Link>
          <Link href={settings.instagram}>
            <Shr.Social>
              <InstagramLogo size={18} weight="regular" color="#fff" />
            </Shr.Social>
          </Link>
          <Link href={settings.twitter}>
            <Shr.Social>
              <TwitterLogo size={18} weight="regular" color="#fff" />
            </Shr.Social>
          </Link>
        </Shr.TopHeaderRow>
        <Link href={settings.whatsapp}>
          <Shr.TopHeaderRow>
            <Shr.Number>Whatsapp</Shr.Number>
            <Shr.Social2>
              <WhatsappLogo size={18} weight="regular" color="#fff" />
            </Shr.Social2>
          </Shr.TopHeaderRow>
        </Link>
      </Shr.TopHeader>
      <Shr.BottomHeader>
        <Shr.BottomHeaderRow>
          <Element onClick={() => setModalVisible(true)}>
            <List size={32} weight="regular" />
          </Element>
        </Shr.BottomHeaderRow>
        <Shr.Logo
          src={`${process.env.NEXT_PUBLIC_IP}${settings.logo.data.attributes.url}`}
          alt="tugba-caglar-logo"
        />
        <Shr.BottomHeaderRow></Shr.BottomHeaderRow>
      </Shr.BottomHeader>
    </Shr.Container>
  );
};

export default MobileHeader;
