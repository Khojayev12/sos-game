import "../assets/styles/quotes.css"
import avatar1 from "../assets/images/quote1.svg"
import avatar2 from "../assets/images/quote2.svg"
import avatar3 from "../assets/images/quote3.svg"
import { LangContext } from "./LangContext"
export default function QuoteTwit(prop){
    return(
        <LangContext.Consumer>
            {(til)=>(
                <div className="twit-card" >
                    <div className="card-up" >
                        <div>sergser</div>
                        <img src={avatar1} alt="" className="card-avatar" />
                    </div>
                </div>
            )}
        </LangContext.Consumer>
    )
}