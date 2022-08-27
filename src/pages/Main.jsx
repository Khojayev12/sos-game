import Header from "../components/Header";
import "../assets/styles/mainSection.css";
import {BsCaretDown} from "react-icons/bs"
import { LangContext } from "../components/LangContext";

export default function Main(props) {
  return (
    <LangContext.Consumer>
      {(til) => (
        <div
          className="main-page" id="main"
          style={{ backgroundColor: "gray", height: "100vh" }}
        >
          <Header setTil={props.setTil} />
          <div className="main-title">
            <div className="main-title-big">{til.gameName}</div>
            <div className="main-title-small"> {til.gameDescription} </div>
            <div className="main-buy">
              <button className="buy-btn">
                <div className="btn-content">
                  <div className="buy-text">{til.buyGame}</div>
                  <div className="cost-text" > $14.99 </div>
                </div>
              </button>
            </div>
            <div className="main-story" >
                <div className="main-story-text" >
                    {til.story}
                </div>
                <div >
                    <BsCaretDown className="story-icon"/>
                </div>
            </div>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
}
