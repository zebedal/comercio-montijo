import Link from "next/link";
import { useContext } from "react";
import { ContainerGutterSizes } from "LayoutComponents/Container/Container";
import Row from "LayoutComponents/Row/Row";
import styles from "./SubMenu.module.scss";
import cx from "classnames";
import { SubMenuItem } from "./MobileMenuItem";
import NavigationContext from "../context/NavigationContext";
import React from "react";

export interface SubMenuProps {
  items?: SubMenuItem[];
  opened: boolean;
  withIcon?: boolean;
}
const SubMenu = React.forwardRef<HTMLDivElement, SubMenuProps>(
  ({ items, opened, withIcon }, ref) => {
    const { isMobile } = useContext(NavigationContext);
    return (
      <div
        ref={ref}
        className={cx(styles.subMenuItemsWrapper, {
          [styles.subMenuOpen]: opened,
          [styles.isMobile]: isMobile,
        })}
      >
        {items?.map((item, index) => {
          return withIcon ? (
            <Row
              key={index}
              noMargin
              gap={5}
              gutter={ContainerGutterSizes.NoGutter}
              className={styles.FlexContainer}
            >
              <Link href={item.path}>{item.title}</Link>
            </Row>
          ) : (
            <Link key={index} href={item.path}>
              {item.title}
            </Link>
          );
        })}
      </div>
    );
  }
);

SubMenu.displayName = "SubMenu";

export default SubMenu;
