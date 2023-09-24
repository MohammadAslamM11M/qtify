import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import Section from "../Section/Section";
import AccordionSection from "../Accordion/Accordion";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "../../api/api";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
    const [topAlbumsData, setTopAlbumsData] = useState([]);
    const [newAlbumsData, setNewAlbumsData] = useState([]);
    const [songData, setSongData] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = React.useState(0);
    const [filteredDataValues, setFilteredDataValues] = useState([]);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const generateAllSongData = async () => {
        try {
            let res = await fetchSongs();
            setSongData(res);
            setFilteredDataValues(res);
        } catch (err) {
            console.error(err);
        }
    };

    const filteredData = (val) => {
        setFilteredDataValues(val);
    };

    useEffect(() => {
        generateSongsData(value);
    }, [value]);

    const generateSongsData = (value) => {
        let key;
        if (value === 0) {
            filteredData(songData);
            return;
        } else if (value === 1) {
            key = "rock";
        } else if (value === 2) {
            key = "pop";
        } else if (value === 3) {
            key = "jazz";
        } else if (value === 4) {
            key = "blues";
        }
        const res = songData.filter((item) => item.genre.key === key);
        filteredData(res);
    };

    const generateData = async () => {
        try {
            let res = await fetchTopAlbums();
            setTopAlbumsData(res);
        } catch (err) {
            console.error(err);
        }
    };

    const generateNewAlbumData = async () => {
        try {
            let res = await fetchNewAlbums();
            setNewAlbumsData(res);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        generateData();
        generateNewAlbumData();
        generateAllSongData();
    }, []);

    const dropdownData = topAlbumsData?.concat(newAlbumsData);

    return (
        <div className={styles.sectionWrapper}>
            <NavBar data={dropdownData} feedback={true} />
            <HeroSection />
            <div>
                <Section
                    data={topAlbumsData}
                    title="Top Albums"
                    type="album"
                    filteredDataValues={topAlbumsData}
                    toggle={toggle}
                />
                <Section
                    data={newAlbumsData}
                    title="New Albums"
                    type="album"
                    filteredDataValues={newAlbumsData}
                    toggle={toggle}
                />
                <hr className={styles.line}></hr>
                <Section
                    data={songData}
                    title="Songs"
                    type="song"
                    value={value}
                    handleChange={handleChange}
                    handleToggle={handleToggle}
                    filteredData={filteredData}
                    filteredDataValues={filteredDataValues}
                    toggle={toggle}
                />
                <hr className={styles.line}></hr>
                <AccordionSection />
            </div>
        </div>
    );
};

export default LandingPage;
