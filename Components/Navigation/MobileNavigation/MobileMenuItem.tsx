import Link from "next/link";
import { ContainerGutterSizes } from "LayoutComponents/Container/Container";
import Row from "LayoutComponents/Row/Row";
import SubMenu from "./SubMenu";
import styles from "./MobileMenuItem.module.scss";
import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export type SubMenuItem = {
  path: string;
  title: string;
  subMenuItems?: SubMenuItem[];
};

interface MobileMenuProps {
  item: SubMenuItem;
}

export default function MobileMenuItem({ item }: MobileMenuProps) {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const { subMenuItems } = item;

  const toggleSubMenu = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <>
      <Row
        noMargin
        gutter={ContainerGutterSizes.NoGutter}
        onClick={toggleSubMenu}
        className={styles.FlexContainer}
      >
        <Link
          href={subMenuItems ? "" : item.path}
          scroll={subMenuItems ? false : true}
        >
          {item.title}
        </Link>

        {!subMenuItems ? null : isDropDownOpen ? (
          <IoChevronUpOutline size={15} />
        ) : (
          <IoChevronDownOutline size={15} />
        )}
      </Row>
      {subMenuItems && <SubMenu items={subMenuItems} opened={isDropDownOpen} />}
    </>
  );
}
