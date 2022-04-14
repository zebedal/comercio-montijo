import Image from "next/image";
import styles from "./ExplorarHeader.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Subtitle from "UI-Components/Subtitle/Subtitle";
import { Colors } from "utils/consts";
import Container, {
  ContainerPaddingSizes,
  ContainerSizes,
} from "LayoutComponents/Container/Container";
import Section from "LayoutComponents/Section/Section";

const categorias = [
  {
    id: 1,
    nome: "Restauração",
    count: 15,
  },
  {
    id: 2,
    nome: "Serviços",
    count: 15,
  },
  {
    id: 3,
    nome: "Hoteis",
    count: 15,
  },
  {
    id: 4,
    nome: "Saúde",
    count: 15,
  },
  {
    id: 5,
    nome: "Lojas",
    count: 15,
  },
  {
    id: 6,
    nome: "Ginásios",
    count: 15,
  },
  {
    id: 7,
    nome: "Farmácias",
    count: 15,
  },
];

const ExplorarHeader = (props) => (
  <Section className={styles.Header}>
    <Image
      src="/assets/img/montijo.jpg"
      layout="fill"
      objectFit="cover"
      alt="comercio montijo"
    />
    <div className={styles.title} style={{ zIndex: 9 }}>
      <Subtitle color={Colors.Green} text="locais" coloredText="Explorar" />
      <p>Todos os locais disponíveis no nosso directório</p>
    </div>
    <Container
      className={styles.fluid}
      maxWidth={ContainerSizes.NoMaxWitdh}
      padding={ContainerPaddingSizes.Tiny}
    >
      <Container maxWidth={ContainerSizes.Large}>
        <Swiper
          /* className="swiperfuck" */
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiperNext",
            prevEl: ".swiperPrev",
          }}
          pagination={{ clickable: true }}
          /* spaceBetween={10} */
          breakpoints={{
            750: {
              slidesPerView: 7,
            },
            450: {
              slidesPerView: 5,
            },
            200: {
              slidesPerView: 3,
            },
          }}
        >
          {categorias.map((cat) => {
            return (
              <SwiperSlide key={cat.id} style={{ textAlign: "center" }}>
                <a className={styles.anchor}>{cat.nome}</a>
              </SwiperSlide>
            );
          })}
          <div className="swiperNext" style={{ color: "white" }}>
            Next
          </div>
          <div className="swiperPrev" style={{ color: "white" }}>
            {" "}
            Prox
          </div>
        </Swiper>
      </Container>
    </Container>
  </Section>
);

export default ExplorarHeader;
