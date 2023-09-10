import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";
import styles from "./Search.module.css";

function Search() {
    return (
        <div>
            <form action="" className={styles.wrapper}>
                <input className={styles.search} type="text" />
                <div>
                    <button className={styles.searchButton} type="submit">
                        <SearchIcon />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Search;
