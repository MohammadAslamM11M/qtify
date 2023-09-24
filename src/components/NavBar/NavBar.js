import React, { useState } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import FeedBack from "../FeedBack/FeedBack";
import { showToast } from "../../config/helper-methods";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar({ data, feedback = false }) {
    const [isFeedBackModalOpen, setIsFeedBackModalOpen] = useState(false);
    const navigate = useNavigate();

    const toggleFeedBackModal = (value = false) => {
        setIsFeedBackModalOpen(value);
    };

    const onSuccess = () => {
        showToast("Feedback Submitted", "success");
    };

    return (
        <div className={styles.wrapper}>
            <nav className={styles.navbar}>
                <div onClick={() => navigate(`/`)}>
                    <Logo id="id" />
                </div>
                <Search data={data} />
                <div onClick={() => toggleFeedBackModal(true)}>
                    <Button children="Give Feedback" />
                </div>
            </nav>
            <FeedBack isOpen={isFeedBackModalOpen} onSuccess={onSuccess} onDismiss={toggleFeedBackModal} />
        </div>
    );
}

export default NavBar;
