import styles from "./Local.module.css";
import Image from "next/image";

const Local = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <Image
          src={props.img}
          layout="fill"
          objectFit="cover"
          alt={props.nome}
        />
        <div className={styles.subCategorias}>
          {props.subCategorias.join(" , ")}
        </div>
        {/* <LocalStatus status={props.openStatus} absolute nome={props.nome} /> */}
      </div>
      <div className={styles.title}>
        <h3>{props.nome}</h3>
        <address>{props.location}</address>
      </div>

      <div className={styles.desc}>{props.desc}</div>

      <div className={styles.footer}>{props.numFotos}</div>
    </div>
  );
};
export default Local;
