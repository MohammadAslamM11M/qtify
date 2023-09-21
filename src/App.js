import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import Section from "./components/Section/Section";
import fetchTopAlbums from "./api/api";
import "./App.css";

function App() {
    const [topAlbumsData, setTopAlbumsData] = useState([]);

    const generateData = async () => {
        try {
            let data = await fetchTopAlbums();
            setTopAlbumsData(data);
        } catch (err) {
            console.err(err);
        }
    };

    useEffect(() => {
        generateData();
    }, []);

    return (
        <div className="App">
            <NavBar />
            <HeroSection />
            <div>
                <Section data={topAlbumsData} title="Top Albums" />
            </div>
        </div>
    );
}

export default App;
