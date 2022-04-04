import React from "react";
import { Colors } from "utils/consts";
import cx from "classnames";
import styles from "./Section.module.scss";
import { ContainerPaddingSizes } from "../Container/Container";

interface SectionProps {
  padding?: ContainerPaddingSizes;
  bgColor?: Colors;
  bgImage?: string;
  overlay?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function Section({
  padding = ContainerPaddingSizes.Medium,
  bgColor,
  className,
  bgImage,
  overlay,
  children,
}: SectionProps) {
  return (
    <section
      className={cx(styles.Section, styles[padding], className)}
      style={{
        backgroundColor: bgColor || "none",
        backgroundImage: bgImage ? bgImage : "none",
        backgroundSize: bgImage ? "cover" : "none",
        backgroundPosition: bgImage ? "center center" : "none",
      }}
    >
      {overlay && <div className={styles.overlay}></div>}
      {children}
    </section>
  );
}
