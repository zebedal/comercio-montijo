import { useState } from "react";
import ExplorarHeader from "./ExplorarHeader";
import ExplorarContent from "./ExplorarContent";
import { categorias } from "../../../public/data/explorar";
import Container, {
  ContainerGutterSizes,
  ContainerSizes,
} from "LayoutComponents/Container/Container";

const ExplorarLocais = (props) => {
  const [filter, setFilter] = useState("Todas");

  return (
    <>
      <Container maxWidth={ContainerSizes.NoMaxWitdh}>
        <ExplorarHeader />
      </Container>
      <Container gutter={ContainerGutterSizes.Small}>
        <ExplorarContent data={categorias} />
      </Container>
    </>
  );
};

export default ExplorarLocais;
