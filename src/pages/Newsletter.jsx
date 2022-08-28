import "../assets/styles/newsletter.css";
import { LangContext } from "../components/LangContext";

export default function Newsletter() {
  return (
    <LangContext.Consumer>
      {(til) => (
        <div className="news-page" >
          <div className="news-img">
            <div className="back-image">
              <div className="img-shadow">.</div>
            </div>
          </div>
          <div className="news-header">
            <div className="news-want">{til.wantStay}</div>
            <div className="news-main-title">{til.newsTitle}</div>
            <div className="news-title-desc">{til.newsDes}</div>
            <div className="news-subs" >
                <input className="email-input" type="email" placeholder={til.yourE} />
                <button className="news-subs-btn"> {til.subscribe} </button>
            </div>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
}
