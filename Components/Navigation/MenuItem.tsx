import Link from "next/link";
import SubMenu from "./MobileNavigation/SubMenu";
import styles from "./MenuItem.module.scss";
import React from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { ContainerGutterSizes } from "LayoutComponents/Container/Container";
import Row from "LayoutComponents/Row/Row";
import { Colors } from "utils/consts";

export type MenuItem = {
  path: string;
  title: string;
  subMenuItems?: MenuItem[];
};

interface MobileMenuProps {
  item: MenuItem;
  openSubMenu: boolean;
  click: () => void;
}

const MenuItem = React.forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ item, click, openSubMenu }, ref) => {
    const { subMenuItems } = item;

    return (
      <div ref={ref} onClick={click}>
        <Row
          noMargin
          gutter={ContainerGutterSizes.NoGutter}
          className={styles.wrapper}
        >
          {subMenuItems ? (
            <a>{item.title}</a>
          ) : (
            <Link href={item.path} scroll={subMenuItems ? false : true}>
              {item.title}
            </Link>
          )}

          {!subMenuItems ? null : openSubMenu ? (
            <IoChevronUpOutline size={15} color={Colors.White} />
          ) : (
            <IoChevronDownOutline size={15} color={Colors.White} />
          )}
          {subMenuItems && openSubMenu && (
            <SubMenu items={subMenuItems} opened={openSubMenu} />
          )}
        </Row>
      </div>
    );
  }
);

MenuItem.displayName = "MenuItem";

export default MenuItem;
