import Container, {
  ContainerPaddingSizes,
} from "LayoutComponents/Container/Container";
import styles from "./ExplorarContent.module.css";
import Local from "./Local";

const ExplorarContent = ({ data }) => (
  <Container className={styles.Grid} padding={ContainerPaddingSizes.Small}>
    {data.map((obj) => (
      <div key={obj.id} className={styles.gridBox}>
        {" "}
        <Local {...obj} />{" "}
      </div>
    ))}
  </Container>
);

export default ExplorarContent;
