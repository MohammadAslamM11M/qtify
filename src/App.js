import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import Section from "./components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
import "./App.css";

function App() {
    const [topAlbumsData, setTopAlbumsData] = useState([]);
    const [newAlbumsData, setNewAlbumsData] = useState([]);

    const generateData = async () => {
        try {
            let data = await fetchTopAlbums();
            setTopAlbumsData(data);
        } catch (err) {
            console.error(err);
        }
    };

    const generateNewAlbumData = async () => {
        try {
            let data = await fetchNewAlbums();
            setNewAlbumsData(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        generateData();
        generateNewAlbumData();
    }, []);

    return (
        <div className="App">
            <NavBar />
            <HeroSection />
            <div>
                <Section data={topAlbumsData} title="Top Albums" />
                <Section data={newAlbumsData} title="New Albums" />
            </div>
        </div>
    );
}

export default App;
