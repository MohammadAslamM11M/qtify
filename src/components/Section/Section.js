import React, { useState } from "react";
import styles from "./Section.module.css";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";

const Section = ({
    title,
    data,
    type,
    filteredData = null,
    filteredDataValues = [],
    toggle = false,
    value = 0,
    handleToggle = null,
    handleChange = null,
}) => {
    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {!toggle ? "Show All" : "Collapse"}
                </h4>
            </div>
            {type === "song" ? <BasicTabs value={value} handleChange={handleChange} /> : null}
            {data?.length === 0 ? (
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <CircularProgress />
                </Box>
            ) : (
                <div className={styles.cardWrapper}>
                    {toggle ? (
                        <div className={styles.wrapper}>
                            {filteredDataValues.map((item) => (
                                <Card key={item.id} data={item} type={type} />
                            ))}
                        </div>
                    ) : (
                        <Carousel
                            data={filteredDataValues}
                            component={(ele) => <Card key={ele.id} data={ele} type={type} />}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default Section;
