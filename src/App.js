import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <HeroSection text1="100 Thousand Songs, ad-free" text2="Over thousands podcast episodes" />
        </div>
    );
}

export default App;
