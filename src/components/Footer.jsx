import "../assets/styles/footer.css";
import "../assets/styles/header.css";
import logo from "../assets/images/logo.png";
import { LangContext } from "./LangContext";
import { AiFillYoutube } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { SiTwitch } from "react-icons/si";

export default function Footer() {
  return (
    <LangContext.Consumer>
      {(til) => (
        <div className="main-header-2">
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
            <div className="footer-socials">
              <RiFacebookFill className="f-icon facebook" />
              <BsTwitter className="f-icon twitter" />
              <AiFillYoutube className="f-icon you-tube" />
              <SiTwitch className="f-icon twitch " />
            </div>
          </div>
          <div className="after-footer">
            <div className="copyright">{til.copyright}</div>
            <div className="footer-privasy">{til.privacy}</div>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
}
