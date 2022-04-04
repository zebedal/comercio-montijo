import Hamburger from "hamburger-react";
import MobileMenu from "./MobileMenu";
import {
  ContainerGutterSizes,
  ContainerPaddingSizes,
  ContainerSizes,
} from "LayoutComponents/Container/Container";
import Row, { Justify } from "LayoutComponents/Row/Row";
import Logo from "Components/svg/Logo";
import styles from "./MobileNavigation.module.scss";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import useOnClickOutside from "hooks/useOutsideClick";
import Button, { MarginTop } from "UI-Components/Button/Button";
import { BsClipboardPlus } from "react-icons/bs";

interface MobileNavigationProps {
  openRegisterModal: () => void;
}

const MobileNavigation = ({ openRegisterModal }: MobileNavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const myRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(myRef, () => setIsMobileMenuOpen(false));

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { asPath } = useRouter();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [asPath]);

  return (
    <header ref={myRef} className={styles.header}>
      <Row
        maxWidth={ContainerSizes.Large}
        gutter={ContainerGutterSizes.Medium}
        padding={ContainerPaddingSizes.Tiny}
        justify={Justify.SpaceBetween}
      >
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <Row justify={Justify.FlexEnd}>
          <Button
            text="Registar"
            marginTop={MarginTop.None}
            icon={<BsClipboardPlus size={20} />}
            click={openRegisterModal}
          />
          <Hamburger
            onToggle={toggleMobileMenu}
            color="#123564"
            toggled={isMobileMenuOpen}
          />
        </Row>
      </Row>
      {isMobileMenuOpen && <MobileMenu />}
    </header>
  );
};

export default MobileNavigation;
