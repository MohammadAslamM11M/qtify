import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./NavBar.module.css";

function NavBar({ data }) {
    return (
        <div className={styles.wrapper}>
            <nav className={styles.navbar}>
                <Logo id="id" />
                <Search data={data} />
                <Button children="Give Feedback" />
            </nav>
        </div>
    );
}

export default NavBar;
