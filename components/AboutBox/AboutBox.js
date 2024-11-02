import React from "react";
import {
  Abb,
  Container,
  Image,
  ButtonIcon,
  ButtonRow,
  ButtonText,
} from "./style";
import { ArrowRight } from "phosphor-react";
import { add3Dots } from "@/helper/add3dots";

const AboutBox = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} />
      <Abb.Title>{item.title}</Abb.Title>
      <Abb.TextBlock>
        <Abb.Text>{add3Dots(item.text, 250)}</Abb.Text>
        <ButtonRow href={"/services/post1"}>
          <ButtonText>Devamını Gör</ButtonText>
          <ButtonIcon>
            <ArrowRight size={20} weight="bold" color="#bf8c41" />
          </ButtonIcon>
        </ButtonRow>
      </Abb.TextBlock>
    </Container>
  );
};

export default AboutBox;
