import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import AlbumDetails from "./components/AlbumDetails/AlbumDetails";
import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/album/:slug" element={<AlbumDetails />} />
                <Route path="*" element={<LandingPage />} />
            </Routes>
        </div>
    );
}

export default App;
