import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import Album from "./components/Album/Album";
import "./App.css";

function App() {
    const [card, setCard] = useState(null);

    let cardURL = "https://qtify-backend-labs.crio.do/albums/top";

    const getDataFromCardApi = async (url) => {
        let data = await axios.get(url);
        setCard(data.data);
    };

    useEffect(() => {
        getDataFromCardApi(cardURL);
    }, [cardURL]);

    return (
        <div className="App">
            <NavBar />
            <HeroSection text1="100 Thousand Songs, ad-free" text2="Over thousands podcast episodes" />
            <Album albumData={card} albumType={"Top Albums"} />
        </div>
    );
}

export default App;
