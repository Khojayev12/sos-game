import "../assets/styles/header.css";
import logo from "../assets/images/logo.png";
import { VscChevronDown } from "react-icons/vsc";
import { useState } from "react";
import steam from "../assets/images/steam.svg";
import xbox from "../assets/images/xbox.svg";
import { LangContext, languages } from "./LangContext";

export default function Header(props) {
  const [isChoiceOpen, setIsChoiceOpen] = useState(false);

  const handleLang = () => {
    setIsChoiceOpen(!isChoiceOpen);
  };

  return (
    <LangContext.Consumer>
      {(til) => (
       
        <div className="main-header">
          <div className="header-center">
            <div className="main-logo">
              <img src={logo} alt="" className="logo-pic" />
            </div>
            <div className="sections">
              <div className="one-section">{til.main}</div>
              <div className="one-section">{til.about}</div>
              <div className="one-section"> {til.gameFeatures} </div>
              <div className="one-section"> {til.systemRequirements} </div>
              <div className="one-section"> {til.quotes} </div>
            </div>
            <div className="settings">
              <div className="language" onClick={handleLang}>
              {til.til}
                <VscChevronDown
                  className={isChoiceOpen ? "up-arrow" : "down-arrow"}
                />
              </div>
              <div className="social">
                <img src={xbox} alt="" className="social-pic" />
                <img src={steam} alt="" className="social-pic" />
              </div>
              {isChoiceOpen ? (
                <div className="selectoin">
                  <div
                    className="choice"
                    onClick={() => {
                      props.setTil(languages.uz);
                      setIsChoiceOpen(false);
                    }}
                  >
                    UZB
                  </div>
                  <div
                    className="choice"
                    onClick={() => {
                      props.setTil(languages.en);
                      setIsChoiceOpen(false);
                    }}
                  >
                    ENG
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
}
