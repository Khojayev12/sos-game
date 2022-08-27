import "../assets/styles/quotes.css";
import { LangContext } from "../components/LangContext";
import QuoteTwit from "../components/QuoteTwit";

export default function Quotes() {
  return (
    <LangContext.Consumer>
      {(til) => (
        <div className="quotes-page">
          <div className="quotes-shadow">
            <div className="quote-text">
              <div className="quote-savol">{til.whatthink}</div>
              <div className="quote-press">{til.presquotes}</div>
              <div className="quote-desc">{til.quoteDes}</div>
              <button className="quote-btn">{til.testimo}</button>
            </div>
            <div className="quotes-it">
              <QuoteTwit
                name="evan lahti"
                nick="PC gamer"
                text={til.q1}
                date="October 18, 2021"
              />
            </div>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
}
