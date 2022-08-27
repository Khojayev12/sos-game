import Main from "./pages/Main";
import "./assets/styles/global.css";
import { useState } from "react";
import { LangContext, languages } from "./components/LangContext";
import About from "./pages/About";
import Features from "./pages/Features";
import Requirements from "./pages/Requiremenys";
import Quotes from "./pages/Quotes";
import Footer from "./components/Footer";

function App() {
  const [til, setTil] = useState(languages.en)

  return (
    <div className="App">
      <LangContext.Provider value={til} >
        <Main setTil={setTil} />
        <About/>
        <Features/>
        <Requirements/>
        <Quotes/>
        <Footer/>
      </LangContext.Provider>
    </div>
  );
}

export default App;
