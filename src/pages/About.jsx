import { LangContext } from "../components/LangContext";
import "../assets/styles/about.css";
import Carusel from "../components/Carusel";

export default function About() {
  return (
    <LangContext.Consumer>
      {(til) => (
        <div className="about-section">
          <div className="about-shadow">
            <div className="about-shadow-2">
              <div className="about-text-section">
                <div className="about-main-text">
                  <div className="about-question"> {til.whatGame} </div>
                  <div className="about-big-name"> {til.gameName2} </div>
                  <div className="about-small-text">
                    {til.smallText1}
                    <br />
                    <br />
                    {til.smallText2}
                  </div>
                </div>
              </div>
              <div className="karusel">
                <Carusel/>
              </div>
            </div>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
}
