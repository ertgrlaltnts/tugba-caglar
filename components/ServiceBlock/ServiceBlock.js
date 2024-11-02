import React from "react";
import { ArrowRight } from "phosphor-react";
import { Svb, ButtonIcon, ButtonText, ButtonRow } from "./style";
import { useWindowSize } from "@/helper/windowSize";

const ServiceBlock = ({ data, index }) => {
  const size = useWindowSize();
  return (
    <Svb.Container href={`${data.link}`}>
      <Svb.Image
        src={`${process.env.NEXT_PUBLIC_IP}${data?.image?.data.attributes.url}`}
        width={60}
        height={60}
        alt={`tugba-caglar-hizmetlerimiz-${index}`}
        loading={"lazy"}
      />
      <Svb.TextBlock>
        <Svb.Title>{data.title}</Svb.Title>
        <ButtonRow>
          <ButtonText>Hizmeti Gör</ButtonText>
          <ButtonIcon>
            <ArrowRight
              size={size.width > 768 ? 20 : 16}
              weight="bold"
              color="#bf8c41"
            />
          </ButtonIcon>
        </ButtonRow>
      </Svb.TextBlock>
    </Svb.Container>
  );
};

export default ServiceBlock;
