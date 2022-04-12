import { Colors } from "utils/consts";
import styles from "./Subtitle.module.scss";
import Text, { TextColors } from "UI-Components/Text/Text";
import cx from "classnames";

export enum SubtitleSizes {
  Small = "small",
  Regular = "regular",
  Large = "large",
}
interface SubtitleProps {
  color?: Colors;
  maxWidth?: number;
  size?: SubtitleSizes;
  text: string;
  coloredText?: string;
  className?: string;
}

export default function Subtitle({
  text,
  coloredText,
  maxWidth,
  color = Colors.TextColor,
  className,
  size = SubtitleSizes.Regular,
}: SubtitleProps) {
  return (
    <div className={cx(styles.wrapper)}>
      <h2
        style={{ color, maxWidth }}
        className={cx(styles.subTitle, styles[size], className)}
      >
        <span style={{ color: Colors.Green }}>{coloredText}&nbsp;</span>
        {text}
      </h2>
    </div>
  );
}
