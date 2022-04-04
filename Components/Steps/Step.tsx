import React from "react";
import Text, { TextSizes } from "UI-Components/Text/Text";
import styles from "./Step.module.scss";
import { BsCheck } from "react-icons/bs";
import { Colors } from "utils/consts";
import cx from "classnames";
import { motion } from "framer-motion";

export interface Steps {
  title: string;
  active: boolean;
  stepNumber: number;
  completed: boolean;
}

const variants = {
  initial: { scale: 1 },
  animated: {
    scale: 1.2,
    transition: {
      type: "spring",
      velocity: 10,

      stiffness: 500,
    },
  },
};

export default function Step({ title, active, stepNumber, completed }: Steps) {
  return (
    <motion.div
      className={styles.wrapper}
      variants={variants}
      initial="initial"
      animate={active ? "animated" : "initial"}
    >
      <div
        className={cx(styles.circle, {
          [styles.completed]: completed,
          [styles.active]: active,
        })}
      >
        {stepNumber}
        {completed && (
          <BsCheck className={styles.checkMark} color={Colors.Green} />
        )}
      </div>
      <Text text={title} size={TextSizes.Tiny} />
    </motion.div>
  );
}
