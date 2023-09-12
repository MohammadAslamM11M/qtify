import React from "react";
import styles from "./Card.module.css";

const Card = ({ cardImage, followers, title }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageFollowers}>
                <img src={cardImage} alt="cardImage" loading="lazy" object-fit="contain" height={170} width={159} />
                <span className={styles.follow}>
                    <p className={styles.textSize}>{followers + " Follows"}</p>
                </span>
            </div>
            <p>{title}</p>
        </div>
    );
};

export default Card;
