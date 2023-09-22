import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assets/LeftSlide.svg";
import "swiper/css";
import styles from "./CarouselLeftNav.module.css";

const CarouselLeftNav = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function () {
            setIsBeginning(swiper.isBeginning);
        });
    }, [swiper]);
    return <div className={styles.leftArrow}>{!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}</div>;
};

export default CarouselLeftNav;
