import styles from "./Hero.module.scss";
import Image from "next/image";
import hero from "/public/assets/img/hero.jpg";
import Select from "react-select";
import { selectNoBorderStyles } from "utils/consts";
import Button, { MarginTop } from "UI-Components/Button/Button";
import { AiOutlineSearch } from "react-icons/ai";
import Row from "LayoutComponents/Row/Row";
import { useState } from "react";

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
  const [inputFocused, setInputFocused] = useState<boolean>(false);

  const handleInputChange = () => {};
  const handleInputFocus = () => {
    setInputFocused(!inputFocused);
  };

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
        <h1 style={{ color: "white", maxWidth: "600px" }}>
          Explorar comerciantes
        </h1>
        <p style={{ color: "white", fontFamily: "quicksand-regular" }}>
          Adipisicing eiusmod pariatur pariatur duis cupidatat cupidatat et.
        </p>
        <br />

        <div className={styles.searchWrapper}>
          <Select
            options={options}
            styles={selectNoBorderStyles}
            isClearable
            maxMenuHeight={200}
            /* onChange={onChange} */
            /* value={value} */
            placeholder="Freguesia"
            className={styles.Select}
          />
          <Row className={styles.InputRow}>
            <AiOutlineSearch
              size={26}
              color={inputFocused ? "#111111" : "#7c7c7c"}
            />
            <input
              type="text"
              className={styles.Input}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputFocus}
            />
          </Row>

          <Button
            text="Pesquisar"
            className={styles.roundedButton}
            marginTop={MarginTop.None}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
