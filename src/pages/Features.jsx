import { LangContext } from "../components/LangContext";
import "../assets/styles/Features.css";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import { useState } from "react";

export default function Features() {
  const [selected, setSelected] = useState(2);
  return (
    <LangContext.Consumer>
      {(til) => (
        <div className="features-page">
          <div className="fea-shadow">
            <div className="fea-container">
              <div className="special">{til.whatSpecial}</div>
              <div className="fea-title">{til.features}</div>
              <div className="fea-several">
                <div className="fea-lines">
                  {selected === 1 ? (
                    <BsCircleFill className="fea-icon11" />
                  ) : (
                    <BsCircle className="fea-icon1" />
                  )}
                  <hr className={selected === 1 ? "line1-2-a" : "line1-2"} />
                  {selected === 2 ? (
                    <BsCircleFill className="fea-icon12" />
                  ) : (
                    <BsCircle className="fea-icon2" />
                  )}
                  <hr className={selected === 2 ? "line2-3-a" : "line2-3"} />
                  {selected === 3 ? (
                    <BsCircleFill className="fea-icon32" />
                  ) : selected === 2 ? (
                    <BsCircle className="fea-icon33" />
                  ) : (
                    <BsCircle className="fea-icon3" />
                  )}
                   <hr className={selected === 3 ? "line3-4-a" : "line3-4"} />
                </div>

                <div className="fea-titles">
                  <div
                    className={selected === 1 ? "fea1 fea-title-1 " : "fea1"}
                    onClick={() => {
                      setSelected(1);
                    }}
                  >
                    {til.gameName}
                  </div>
                  {selected === 1 ? (
                    <div className="fea12">{til.fea12}</div>
                  ) : (
                    <></>
                  )}

                  <div
                    className="fea1"
                    onClick={() => {
                      setSelected(2);
                    }}
                  >
                    {til.fea21}{" "}
                  </div>
                  {selected === 2 ? (
                    <div className="fea12">{til.fea12}</div>
                  ) : (
                    <></>
                  )}

                  <div
                    className="fea1"
                    onClick={() => {
                      setSelected(3);
                      console.log("192874");
                    }}
                  >
                    {til.fea31}
                  </div>
                  {selected === 3 ? (
                    <div className="fea12">{til.fea12}</div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
}
