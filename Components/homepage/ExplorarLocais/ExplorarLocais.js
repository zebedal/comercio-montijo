import { useState } from "react";
import ExplorarHeader from "./ExplorarHeader";
import ExplorarContent from "./ExplorarContent";
import { categorias } from "../../../public/data/explorar";
import Container, {
  ContainerSizes,
} from "LayoutComponents/Container/Container";
import Section from "LayoutComponents/Section/Section";
import { Colors } from "utils/consts";

const ExplorarLocais = (props) => {
  const [filter, setFilter] = useState("Todas");

  return (
    <>
      <Container maxWidth={ContainerSizes.NoMaxWitdh}>
        <ExplorarHeader />
      </Container>
      <Section bgColor={Colors.LightGrey}>
        <ExplorarContent data={categorias} />
      </Section>
    </>
  );
};

export default ExplorarLocais;
