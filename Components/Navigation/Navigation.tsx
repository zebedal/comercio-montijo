import RegularNavigation from "./RegularNavigation";
import useWindowsDimensions from "../../hooks/useWindowDimensions";
import { Breakpoints } from "utils/consts";
import { useState, useEffect, useCallback } from "react";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import useScrollTop from "hooks/useScrollTop";
import { NavigationContextProvider } from "./context/NavigationContext";
import Modal from "UI-Components/Modal/Modal";
import RegisterForm from "Components/RegisterForm/RegisterForm";

export default function Navigation() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [registerModalOpen, setRegisterModalOpen] = useState<boolean>(false);
  const { width } = useWindowsDimensions();

  const scrollPos = useScrollTop();

  useEffect(() => {
    if (width !== undefined) {
      if (width < Breakpoints.Medium) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  }, [width]);

  useEffect(() => {
    if (registerModalOpen) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";
  }, [registerModalOpen]);

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  return (
    <NavigationContextProvider>
      {isMobile && <MobileNavigation openRegisterModal={openRegisterModal} />}
      {!isMobile && (
        <RegularNavigation
          scrollPos={scrollPos}
          openRegisterModal={openRegisterModal}
        />
      )}
      {registerModalOpen && (
        <Modal closeModal={closeRegisterModal}>
          <RegisterForm />
        </Modal>
      )}
    </NavigationContextProvider>
  );
}
