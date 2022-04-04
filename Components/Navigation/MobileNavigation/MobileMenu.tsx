import Container, {
  ContainerGutterSizes,
  ContainerPaddingSizes,
} from "LayoutComponents/Container/Container";
import styles from "./MobileMenu.module.scss";
import { MenuItems } from "utils/consts";
import React from "react";
import MobileMenuItem from "./MobileMenuItem";
import Row from "LayoutComponents/Row/Row";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import Text, { TextSizes } from "UI-Components/Text/Text";

interface MobileMenuProps {
  children?: React.ReactNode;
}

const MobileMenu = React.forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ children }, ref) => {
    return (
      <div className={styles.wrapper} ref={ref}>
        <Container
          className={styles.linksWrapper}
          gutter={ContainerGutterSizes.Small}
          padding={ContainerPaddingSizes.Small}
        >
          {MenuItems.map((item, index) => (
            <MobileMenuItem key={index} item={item} />
          ))}
          <br />
          <Text text="Visite-nos nas redes sociais" size={TextSizes.Small} />
          <Row
            gutter={ContainerGutterSizes.NoGutter}
            gap={10}
            className={styles.iconsWrapper}
          >
            <IoLogoFacebook size={20} className={styles.icons} />
            <IoLogoInstagram size={20} className={styles.icons} />
            <IoLogoLinkedin size={20} className={styles.icons} />
          </Row>
        </Container>
      </div>
    );
  }
);

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
