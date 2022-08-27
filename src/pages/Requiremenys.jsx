import "../assets/styles/requirements.css";
import { LangContext } from "../components/LangContext";
export default function Requirements() {
  return (
    <LangContext.Consumer>
      {(til) => (
        <div className="require-page" id="requirements" >
          <div className="req-shadow">
            <div className="req-sub-title">{til.canrun}</div>
            <div className="req-title">{til.systemRequirements}</div>
            <div className="req-table">
              <div className="req-row-1">
                <div className="req-col-1">
                  <div className="req-os"> {til.os}: </div>
                  <div className="req-os-2">{til.osDes}</div>
                </div>
                <div className="req-col-1">
                  <div className="req-os"> {til.cpu}: </div>
                  <div className="req-os-2">{til.cpu2}</div>
                </div>
              </div>
              <div className="req-row-1">
                <div className="req-col-1">
                  <div className="req-os"> {til.memory}: </div>
                  <div className="req-os-2">{til.memory2}</div>
                </div>
                <div className="req-col-1">
                  <div className="req-os"> {til.storage}: </div>
                  <div className="req-os-2">{til.storage2}</div>
                </div>
              </div>
              <div
                className="req-os"
                style={{ marginTop: "15px", marginLeft: "20px" }}
              >
                {til.graphics}:
              </div>
              <div className="req-os-2" style={{marginLeft:"20px"}} >{til.graphics2}</div>
            </div>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
}
