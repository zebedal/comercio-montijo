import styles from "./Hero.module.scss";
import Image from "next/image";
import hero from "/public/assets/img/hero.jpg";
import Select from "react-select";
import { selectNoBorderStyles } from "utils/consts";
import Button, { MarginTop } from "UI-Components/Button/Button";

const options = [
  {
    label: "Pegões",
    value: "pegoes",
  },
  {
    label: "Canha",
    value: "canha",
  },
  {
    label: "Afonsoeiro",
    value: "afonsoeiro",
  },
];

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
        <div className={styles.searchWrapper}>
          <form className={styles.Form}>
            <Select
              options={options}
              styles={selectNoBorderStyles}
              isClearable
              maxMenuHeight={200}
              /* onChange={onChange} */
              /* value={value} */
              placeholder="Freguesia"
            />
            <input type="text" className={styles.Input} />
            <Button
              text="Pesquisar"
              className={styles.roundedButton}
              marginTop={MarginTop.None}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
