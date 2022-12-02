import "../assets/styles/quotes.css";
import { LangContext } from "../components/LangContext";
import avatar1 from "../assets/images/quote1.png";
import avatar2 from "../assets/images/quote2.png";
import avatar3 from "../assets/images/quote3.png";
import QuoteTwit from "../components/QuoteTwit";
import Newsletter from "./Newsletter";

export default function Quotes() {
  return (
    <LangContext.Consumer>
      {(til) => (
        <div className="quotes-page" id="quotes" >
          <div className="quotes-shadow">
            <div className="quote-text">
              <div className="quote-savol">{til.whatthink}</div>
              <div className="quote-press">{til.presquotes}</div>
              <div className="quote-desc">{til.quoteDes}</div>
              <button className="quote-btn">{til.testimo}</button>
            </div>
            <div className="quotes-it">
              <div className="comment-1">
                <QuoteTwit
                  name="evan lahti"
                  nick="PC gamer"
                  text={til.q1}
                  date={til.oktabr + " 18, 2021"}
                  pic={avatar1}
                />
              </div>

              <div className="comment-2">
                <QuoteTwit
                  name="Jada Griffin "
                  nick="Nerdreactor"
                  text={til.q2}
                  date={til.dekabr + " 21, 2021"}
                  pic={avatar2}
                />
              </div>

              <div className="comment-3">
                <QuoteTwit
                  name="Aaron Williams "
                  nick="Uproxx"
                  text={til.q3}
                  date={til.dekabr + " 24, 2021"}
                  pic={avatar3}
                />
              </div>
            </div>
          </div>
          <Newsletter/>
        </div>
      )}
    </LangContext.Consumer>
  );
}
