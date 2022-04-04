import cx from "classnames";
import styles from "./Text.module.scss";
import React from "react";

export enum TextSizes {
  Tiny = "tiny",
  Small = "small",
  Regular = "regular",
  Large = "large",
  ExtraLarge = "extra-large",
}

export enum TextColors {
  Black = "black",
  White = "white",
  Green = "blue",
  Yellow = "yellow",
}

export enum FontWeight {
  Light = "font-light",
  Regular = "font-regular",
  Medium = "font-medium",
  Semi = "font-semi-bold",
  Bold = "font-bold",
}

export enum TextAlign {
  left = "text-align-left",
  right = "text-align-right",
  center = "text-align-center",
}

interface TextProps {
  size?: TextSizes;
  fontWeight?: FontWeight;
  color?: TextColors;
  noMargin?: boolean;
  text?: string;
  textAlign?: TextAlign;
  bold?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      text,
      size = TextSizes.Regular,
      textAlign = TextAlign.left,
      color = TextColors.Black,
      fontWeight = FontWeight.Regular,
      noMargin = false,
      bold = false,
      children,
      className,
    },
    ref
  ) => {
    return (
      <p
        ref={ref}
        className={cx(
          className,
          styles.text,
          styles[size],
          styles[textAlign],
          styles[fontWeight],
          styles[color],
          {
            [styles.bold]: bold,
            [styles.noMargin]: noMargin,
          }
        )}
      >
        {text}
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;
