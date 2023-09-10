import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <Search />
            <Button children="Give Feedback" />
        </nav>
    );
}

export default NavBar;
