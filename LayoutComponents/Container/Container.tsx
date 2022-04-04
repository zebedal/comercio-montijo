import styles from "./Container.module.scss";
import cx from "classnames";
import { Colors } from "utils/consts";

export enum ContainerSizes {
  Small = "small-width",
  Medium = "medium-width",
  Large = "large-width",
  ExtraLarge = "extra-large-width",
  NoMaxWitdh = "no-max-width",
}

export enum ContainerPaddingSizes {
  Tiny = "tiny-padding",
  Small = "small-padding",
  Medium = "medium-padding",
  Large = "large-padding",
  ExtraLarge = "extra-large-padding",
  NoPadding = "no-padding",
}

export enum ContainerGutterSizes {
  Tiny = "tiny-gutter",
  Small = "small-gutter",
  Medium = "medium-gutter",
  Large = "large-gutter",
  NoGutter = "no-gutter",
}

export enum TextAlign {
  Left = "left",
  Center = "center",
  Right = "right",
}

export interface ContainerProps {
  children: React.ReactNode;
  padding?: ContainerPaddingSizes;
  maxWidth?: ContainerSizes;
  gutter?: ContainerGutterSizes;
  maxHeight?: boolean;
  textAlign?: TextAlign;
  backgroundColor?: Colors;
  noMargin?: boolean;
  onClick?: () => void;
  className?: string;
}

const Container = ({
  maxWidth = ContainerSizes.Large,
  padding = ContainerPaddingSizes.NoPadding,
  maxHeight,
  gutter = ContainerGutterSizes.NoGutter,
  backgroundColor,
  textAlign = TextAlign.Left,
  noMargin,
  onClick,
  className,
  children,
}: ContainerProps) => (
  <div
    onClick={onClick}
    className={cx(
      styles.Container,
      styles[padding],
      styles[maxWidth],
      styles[gutter],
      className,
      {
        [styles.maxHeight]: maxHeight,
        [styles.noMargin]: noMargin,
      }
    )}
    style={{ backgroundColor, textAlign }}
  >
    {children}
  </div>
);

export default Container;
