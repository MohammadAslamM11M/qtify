import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";
import Menu from "../Menu/Menu";
import styles from "./Search.module.css";

function Search({ data }) {
    const [inputValue, setInputValue] = useState("");
    const [filteredOptions, setFilteredOptions] = useState([]);

    const _filterData = (data) => {
        if (!inputValue) {
            setFilteredOptions([]);
            return;
        }

        const filteredOptions = data?.filter((albumsData) =>
            albumsData?.title?.toLowerCase()?.includes(inputValue.toLowerCase())
        );

        setFilteredOptions(filteredOptions);
    };

    useEffect(() => {
        _filterData(data);
    }, [inputValue]);

    return (
        <div>
            <form className={styles.wrapper}>
                <input
                    className={styles.search}
                    type="text"
                    value={inputValue}
                    placeholder="Search a album of your choice"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <div>
                    <button className={styles.searchButton} type="submit">
                        <SearchIcon className={styles.SearchIcon} />
                    </button>
                </div>
            </form>
            <div className={styles.dropdownWrapper}>
                <Menu albums={filteredOptions} />
            </div>
        </div>
    );
}

export default Search;
