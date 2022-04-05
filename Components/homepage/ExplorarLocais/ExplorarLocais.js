import { useState, Fragment } from "react";
import ExplorarHeader from "./ExplorarHeader";
import ExplorarContent from "./ExplorarContent";
import { categorias } from "../../../public/data/explorar";
import Container, {
  ContainerSizes,
} from "LayoutComponents/Container/Container";

const ExplorarLocais = (props) => {
  const [filter, setFilter] = useState("Todas");

  return (
    <>
      <Container maxWidth={ContainerSizes.NoMaxWitdh}>
        <ExplorarHeader />
      </Container>
      <Container>
        <ExplorarContent data={categorias} />
      </Container>
    </>
  );
};

export default ExplorarLocais;
