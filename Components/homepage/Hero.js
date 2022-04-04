import styles from "./Hero.module.css";
import Image from "next/image";
import hero from "/public/assets/img/hero.jpg";

const Hero = () => {
  return (
    <div style={{ position: "relative", height: "750px" }}>
      <Image
        src={hero}
        layout="fill"
        alt="montijo praça da república"
        priority={true}
        loading="eager"
      />
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h2>Pesquisar comerciantes</h2>
        <p style={{ color: "white", fontFamily: "quicksand-regular" }}>
          Adipisicing eiusmod pariatur pariatur duis cupidatat cupidatat et.
        </p>
        <br />
        <div className={styles.searchWrapper}></div>
      </div>
    </div>
  );
};

export default Hero;
