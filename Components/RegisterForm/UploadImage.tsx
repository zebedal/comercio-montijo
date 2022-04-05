import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import styles from "./UploadImage.module.scss";
import Image from "next/image";
import { SelectedImage } from "./Step2";
import { FiTrash2 } from "react-icons/fi";

interface UploadImageProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedImage?: SelectedImage;
  onDelete: (name: string) => void;
}

export default function UploadImage({
  onChange,
  onDelete,
  selectedImage,
}: UploadImageProps) {
  return (
    <div className={styles.inputWrapper}>
      {!selectedImage && (
        <>
          <AiOutlineCamera className={styles.icon} size={32} />
          <label htmlFor="upload-photo"></label>
          <input
            className={styles.photoUploadInput}
            type="file"
            accept="image/jpeg, image/png, image/webp"
            onChange={onChange}
            name="upload-photo"
            id="upload-photo"
          />
        </>
      )}

      {selectedImage && (
        <>
          <Image
            src={selectedImage.url}
            layout="fill"
            objectFit="cover"
            alt="imagem selecionada"
          />
          <div className={styles.overlay}></div>
          <div className={styles.iconWrapper}>
            <FiTrash2 size={24} onClick={() => onDelete(selectedImage.name)} />
          </div>
        </>
      )}
    </div>
  );
}
