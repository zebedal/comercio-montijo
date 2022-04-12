import styles from "./Local.module.css";
import Image from "next/image";
import { MdOutlinePhotoCamera } from "react-icons/md";

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
      </div>
      <div className={styles.title}>
        <h3>{props.nome}</h3>
        <address>{props.location}</address>
      </div>

      <div className={styles.desc}>{props.desc}</div>

      <div className={styles.footer}>
        {props.numFotos}
        <MdOutlinePhotoCamera color="#111111" size={13} />
      </div>
    </div>
  );
};
export default Local;
