import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
    return (
        <div className={styles.heroSection}>
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <img
                className={styles.headphoneImg}
                src={require("../../assets/vibrating-headphone-1.png")}
                alt="headphone-logo"
                width={212}
            />
        </div>
    );
}

export default HeroSection;
