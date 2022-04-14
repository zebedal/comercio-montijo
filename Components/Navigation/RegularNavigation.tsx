import { useEffect, useRef, useState } from "react";
import React from "react";
import Container, {
  ContainerGutterSizes,
  ContainerPaddingSizes,
  ContainerSizes,
} from "LayoutComponents/Container/Container";
import Row, { Justify } from "LayoutComponents/Row/Row";
import Logo from "Components/svg/Logo";
import styles from "./RegularNavigation.module.scss";
import cx from "classnames";
import { MenuItems } from "utils/consts";
import MenuItem from "./MenuItem";
import { useRouter } from "next/router";
import useOnClickOutside from "hooks/useOutsideClick";
import { motion } from "framer-motion";
import Button, { MarginTop } from "UI-Components/Button/Button";
import { BsClipboardPlus } from "react-icons/bs";

interface RegularNavigationProps {
  scrollPos: number;
  openRegisterModal: () => void;
}

export default function RegularNavigation({
  scrollPos,
  openRegisterModal,
}: RegularNavigationProps) {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | undefined>(
    undefined
  );
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const myRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(myRef, () => closeSubmenuOutside());
  const { asPath } = useRouter();

  useEffect(() => {
    setOpenSubMenu(false);
  }, [asPath]);

  const closeSubmenuOutside = () => {
    setOpenSubMenuIndex(undefined);
    setOpenSubMenu(false);
  };

  const toggleSubMenu = (id: number) => {
    if (id !== openSubMenuIndex) {
      setOpenSubMenu(true);
      setOpenSubMenuIndex(id);
      return;
    } else {
      setOpenSubMenuIndex(undefined);
      setOpenSubMenu(false);
    }
  };

  return (
    <header
      className={cx(styles.header, {
        [styles.scrolled]: scrollPos > 30,
      })}
    >
      {/* <motion.div
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 1, ease: "easeOut" }}
        style={{ height: "100%" }}
      > */}
      <Container padding={ContainerPaddingSizes.Tiny}>
        <Row
          maxWidth={ContainerSizes.Large}
          gutter={ContainerGutterSizes.Medium}
          justify={Justify.SpaceBetween}
          maxHeight
        >
          <div className={styles.logoWrapper}>{<Logo />}</div>
          <nav className={styles.NavBar}>
            {MenuItems &&
              MenuItems.map((item, index) => {
                return (
                  <MenuItem
                    {...(index === openSubMenuIndex && { ref: myRef })}
                    key={index}
                    item={item}
                    click={() => toggleSubMenu(index)}
                    openSubMenu={index === openSubMenuIndex && openSubMenu}
                  />
                );
              })}
            <Button
              text="Registar"
              marginTop={MarginTop.None}
              icon={<BsClipboardPlus size={20} />}
              click={openRegisterModal}
              className={styles.registerButton}
              noBackground
            />
          </nav>
        </Row>
      </Container>
      {/* </motion.div> */}
    </header>
  );
}
