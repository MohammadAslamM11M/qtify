import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection({ text1, text2 }) {
    return (
        <div className={styles.heroSection}>
            <div>
                <h1>{text1}</h1>
                <h1>{text2}</h1>
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
