import "../assets/styles/quotes.css";
import { LangContext } from "./LangContext";
import twit from "../assets/images/twitter.png"
export default function QuoteTwit(props) {
  return (
    <LangContext.Consumer>
      {(til) => (
        <div className="twit-card">
          <div className="card-up">
            <img src={props.pic} alt="" className="card-avatar" />
            <div className="card-title">
              {props.name} <br />
              <div className="card-nick" >{props.nick}</div>
            </div>
            <img src={twit} alt="" className="twitter-icon" />
          </div>
          <div className="card-text" >
            {props.text}
          </div>
          <div className="card-date" >
            {props.date}
          </div>
          <div style={{height:"21px"}} > </div>
        </div>
      )}
    </LangContext.Consumer>
  );
}
