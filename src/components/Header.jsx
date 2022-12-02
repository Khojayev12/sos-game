import "../assets/styles/header.css";
import logo from "../assets/images/logo.png";
import { VscChevronDown } from "react-icons/vsc";
import { useState } from "react";
import steam from "../assets/images/steam icon.png";
import xbox from "../assets/images/xbox icon.png";
import { LangContext, languages } from "./LangContext";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

export default function Header(props) {
  const [isChoiceOpen, setIsChoiceOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLang = () => {
    setIsChoiceOpen(!isChoiceOpen);
  };

  return (
    <LangContext.Consumer>
      {(til) => (
        <>
          <div className="main-header">
            <div className="header-center">
              <div className="main-logo">
                <img src={logo} alt="" className="logo-pic" />
              </div>
              <div className="sections">
                <div className="one-section">
                  <a href="/#main" className="my-href">
                    {til.main}
                  </a>
                </div>
                <div className="one-section">
                  <a href="/#about" className="my-href">
                    {til.about}
                  </a>
                </div>
                <div className="one-section">
                  <a href="/#features" className="my-href">
                    {til.gameFeatures}
                  </a>
                </div>
                <div className="one-section">
                  <a href="/#requirements" className="my-href">
                    {til.systemRequirements}
                  </a>
                </div>
                <div className="one-section">
                  <a href="/#quotes" className="my-href">
                    {til.quotes}
                  </a>
                </div>
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
          <div className="mobile-menu">
            <div className="mobile-header">
              <div className="mobile-logo">
                <img src={logo} alt="" className="mobile-logo-pic" />
              </div>

              <div className="mobile-change-lang">
                <div
                  className="mob-change-lang-text"
                  onClick={() => {
                    setIsChoiceOpen(!isChoiceOpen);
                  }}
                >
                  {til.til}
                  <VscChevronDown
                    className={isChoiceOpen ? "up-arrow" : "down-arrow"}
                  />
                </div>
              </div>
              {isChoiceOpen ? (
                <div className="mobile-lang-choice">
                  <div
                    className="mob-lang-choice-one"
                    style={{ marginTop: "5px" }}
                    onClick={() => {
                      props.setTil(languages.uz);
                      setIsChoiceOpen(false)
                    }}
                  >
                    UZB
                  </div>
                  <div
                    className="mob-lang-choice-one"
                    onClick={() => {
                      props.setTil(languages.en);
                      setIsChoiceOpen(false)
                    }}
                  >
                    ENG
                  </div>
                </div>
              ) : (
                <></>
              )}

              <div
                className="mob-hamburger"
                onClick={() => {
                  setIsMenuOpen(true);
                }}
              >
                <HiMenuAlt3 />
              </div>
            </div>
            <div
              className={
                isMenuOpen
                  ? "mob-menu-div menu-active"
                  : "mob-menu-div menu-de-active"
              }
            >
              <IoCloseSharp
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="menu-close-btn"
              />
              <button
                className="menu-sections-each"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <a href="./#main" className="my-href">
                  {til.main}
                </a>
              </button>
              <button
                className="menu-sections-each"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <a href="./#about" className="my-href">
                  {til.about}
                </a>
              </button>
              <button
                className="menu-sections-each"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <a href="./#features" className="my-href">
                  {til.gameFeatures}
                </a>
              </button>
              <button
                className="menu-sections-each"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <a href="./#requirements" className="my-href">
                  {til.systemRequirements}
                </a>
              </button>
              <button
                className="menu-sections-each"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <a href="./#quotes" className="my-href">
                  {til.quotes}
                </a>
              </button>
            </div>
          </div>
        </>
      )}
    </LangContext.Consumer>
  );
}
