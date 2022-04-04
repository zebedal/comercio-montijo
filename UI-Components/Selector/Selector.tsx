import React, { useState } from "react";
import { Colors } from "utils/consts";
import styles from "./Selector.module.scss";
import Text from "UI-Components/Text/Text";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { CategoriasNegocios } from "utils/consts";

export interface SelectorProps {
  items: Record<keyof typeof CategoriasNegocios, string>;
  register?: any;
  errors?: any;
}

export default function Selector({ items, register, errors }: SelectorProps) {
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] =
    useState<string>("Escolher categoria");

  const handleSelection = (option: string) => {
    setSelectedOption(option);
    setOptionsOpen(false);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <label htmlFor="categoria">* Categoria:</label>
        <div className={styles.selectorWrapper}>
          <div
            className={styles.selector}
            onClick={() => setOptionsOpen(!optionsOpen)}
            {...register("categoria", {
              required: {
                value: true,
                message: "Por favor insira uma categoria",
              },
            })}
          >
            <Text text={selectedOption} noMargin className={styles.text} />
            <IoChevronDownOutline size={20} color={Colors.TextLightColor} />
          </div>
          {errors.categoria && (
            <p className={styles.error}>{errors.categoria.message}</p>
          )}
          {optionsOpen && (
            <ul className={styles.dropdown}>
              {Object.values(items).map((option, index) => {
                return (
                  <li
                    className={styles.listItem}
                    key={index}
                    onClick={() => handleSelection(option)}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
