import {
  ContainerProps,
  ContainerSizes,
  ContainerGutterSizes,
  ContainerPaddingSizes,
} from "../Container/Container";
import styles from "./Row.module.scss";
import cx from "classnames";
import React from "react";
import { Colors } from "utils/consts";

export enum Justify {
  Center = "center",
  SpaceBetween = "space-between",
  SpaceAround = "space-around",
  FlexStart = "flex-start",
  FlexEnd = "flex-end",
}

export enum Align {
  Center = "align-center",
  FlexStart = "align-flex-start",
  FlexEnd = "align-flex-end",
}

interface FlexContainerProps extends ContainerProps {
  wrap?: boolean;
  justify?: Justify;
  align?: Align;
  noMargin?: boolean;
  bgColor?: Colors;
  gap?: number;
  ref?: any;
  children: React.ReactNode;
}

const Row = React.forwardRef<HTMLDivElement, FlexContainerProps>(
  (
    {
      wrap = false,
      justify = Justify.FlexStart,
      align = Align.Center,
      children,
      padding = ContainerPaddingSizes.NoPadding,
      maxWidth = ContainerSizes.NoMaxWitdh,
      gutter = ContainerGutterSizes.Small,
      noMargin = false,
      bgColor = Colors.Transparent,
      gap,
      maxHeight = false,
      className,
      onClick,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cx(
          styles.FlexContainer,
          styles[justify],
          styles[align],
          styles[padding],
          styles[maxWidth],
          styles[gutter],
          className,
          {
            [styles.wrap]: wrap,
            [styles.noMargin]: noMargin,
            [styles.maxHeight]: maxHeight,
          }
        )}
        style={{ gap: gap ? `${gap}px` : 0, backgroundColor: bgColor }}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

Row.displayName = "Row";

export default Row;
