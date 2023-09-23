import React from "react";
import styles from "./MenuItem.module.css";

const MenuItem = ({ item }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.imgTextWrapper}>
                    <div className={styles.thumbnailWrapper}>
                        <img src={item?.image} alt="albumImage" width={"66"} height={"71"} />
                    </div>
                    <h4>{item?.title}</h4>
                </div>
                <div className={styles.followWrapper}>
                    <h4>{item?.follows} Follows</h4>
                </div>
            </div>
        </>
    );
};

export default MenuItem;
