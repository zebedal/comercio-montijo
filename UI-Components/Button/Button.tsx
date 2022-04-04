import styles from "./Button.module.scss";
import cx from "classnames";
import React from "react";

export enum MarginTop {
  Small = "small-margin-top",
  Medium = "medium-margin-top",
  Large = "large-margin-top",
  None = "no-margin",
}

export enum ButtonTypes {
  Button = "button",
  Submit = "submit",
}

export enum IconPosition {
  Left = "icon-left",
  Right = "icon-right",
}

interface ButtonProps {
  text: string;
  type?: ButtonTypes;
  marginTop?: MarginTop;
  icon?: React.ReactElement;
  iconPosition?: IconPosition;
  rounded?: boolean;
  noBackground?: boolean;
  className?: string;
  disabled?: boolean;
  click?: () => void;
}

export default function Button({
  text,
  marginTop = MarginTop.Small,
  type = ButtonTypes.Button,
  icon,
  noBackground = false,
  iconPosition = IconPosition.Right,
  rounded = false,
  click,
  disabled = false,
  className,
}: ButtonProps) {
  return (
    <>
      <button
        type={type}
        onClick={click}
        className={cx(
          styles.Button,
          styles[marginTop],
          styles[iconPosition],
          className,
          {
            [styles.disabled]: disabled,
            [styles.rounded]: rounded,
            [styles.noBg]: noBackground,
          }
        )}
      >
        {text}
        {icon}
      </button>
    </>
  );
}
