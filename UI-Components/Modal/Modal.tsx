import styles from "./Modal.module.scss";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal = ({ children, closeModal }: ModalProps) => {
  const [_document, setDocument] = useState<Document | null>(null);

  useEffect(() => {
    setDocument(document);
  }, []);

  if (_document) {
    return ReactDOM.createPortal(
      <>
        <div className={styles.backDrop} onClick={closeModal}></div>
        <div className={styles.wrapper}>
          <IoClose size={30} onClick={closeModal} />

          {children}
        </div>
      </>,
      _document.getElementById("modal")!
    );
  } else {
    return null;
  }
};

export default Modal;
