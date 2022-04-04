import styles from "./Destaque.module.scss";
import Image from "next/image";
import Link from "next/link";
import Star from "../svg/Star";
import Container, {
  ContainerPaddingSizes,
  ContainerSizes,
  TextAlign,
} from "LayoutComponents/Container/Container";

const starStyles = {
  position: "absolute",
  top: "20px",
  right: "20px",
  zIndex: 9,
};

const Destaque = () => {
  return (
    <Container
      maxWidth={ContainerSizes.Large}
      textAlign={TextAlign.Center}
      padding={ContainerPaddingSizes.Medium}
    >
      <h2>Lojas em destaque</h2>
      <p>Pesquise uma seleção dos melhores comerciantes no Montijo</p>
      <div className={styles.grid}>
        <Link href="/" passHref>
          <div className={styles.box}>
            <Image
              src="/assets/img/destaque/area1.jpg"
              layout="fill"
              alt=""
              objectFit="cover"
            />
            <div className={styles.titleWrapper}>
              <h3 className={styles.title} style={{ color: "white" }}>
                Uma loja
              </h3>
              <p>Categoria: Padaria</p>
            </div>
            <Star styles={starStyles} />
          </div>
        </Link>

        <Link href="/" passHref>
          <div className={styles.box}>
            <Image
              src="/assets/img/destaque/area2.jpg"
              layout="fill"
              alt=""
              objectFit="cover"
            />
            <div className={styles.titleWrapper}>
              <h3 className={styles.title} style={{ color: "white" }}>
                Outra loja
              </h3>
              <p>Categoria: Roupas</p>
            </div>
            <Star styles={starStyles} />
          </div>
        </Link>

        <Link href="/" passHref>
          <div className={styles.box}>
            <Image
              src="/assets/img/destaque/area3.jpg"
              layout="fill"
              alt=""
              objectFit="cover"
            />
            <div className={styles.titleWrapper}>
              <h3 className={styles.title} style={{ color: "white" }}>
                Uma loja
              </h3>
              <p>Categoria: Padaria</p>
            </div>
            <Star styles={starStyles} />
          </div>
        </Link>

        <Link href="/" passHref>
          <div className={styles.box}>
            <Image
              src="/assets/img/destaque/area4.jpg"
              layout="fill"
              alt=""
              objectFit="cover"
            />
            <div className={styles.titleWrapper}>
              <h3 className={styles.title} style={{ color: "white" }}>
                Uma loja
              </h3>
              <p>Categoria: Padaria</p>
            </div>
            <Star styles={starStyles} />
          </div>
        </Link>

        <Link href="/" passHref>
          <div className={styles.box}>
            <Image
              src="/assets/img/destaque/area5.jpg"
              layout="fill"
              alt=""
              objectFit="cover"
            />
            <div className={styles.titleWrapper}>
              <h3 className={styles.title} style={{ color: "white" }}>
                Uma loja
              </h3>
              <p>Categoria: Padaria</p>
            </div>
            <Star styles={starStyles} />
          </div>
        </Link>
      </div>
    </Container>
  );
};
export default Destaque;
