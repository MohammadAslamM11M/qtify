import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./Menu.module.css";

const Menu = ({ albums }) => {
    return (
        <>
            <div className={styles.wrapper}>
                {albums?.length
                    ? albums.map((item) => (
                          <div className={styles.menuItemWrapper} key={item.id}>
                              <MenuItem item={item} />
                          </div>
                      ))
                    : null}
            </div>
        </>
    );
};

export default Menu;
