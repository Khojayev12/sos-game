import Main from "./pages/Main";
import "./assets/styles/global.css";
import { useState } from "react";
import { LangContext, languages } from "./components/LangContext";
import About from "./pages/About";

function App() {
  const [til, setTil] = useState(languages.en)

  return (
    <div className="App">
      <LangContext.Provider value={til} >
        <Main setTil={setTil} />
        <About/>
      </LangContext.Provider>
    </div>
  );
}

export default App;
