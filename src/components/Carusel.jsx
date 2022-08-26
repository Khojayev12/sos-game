import { useState } from "react";
import pic1 from "../assets/images/pic1.svg";
import pic2 from "../assets/images/1234.png";
import pic3 from "../assets/images/987.png";
import { BsCaretDown } from "react-icons/bs";
import "../assets/styles/carusel.css";

export default function Carusel() {
  const [first, setFirst] = useState(1);
  const slider = () => {
    console.log(first);
    if (first === 3) {
      setFirst(1);
    } else {
      setFirst(first + 1);
    }
  };
  return (
    <div className="karusel-body">
      <img
        src={pic1}
        alt=""
        className={first === 1 ? "all-pic  front" : first === 2 ? "all-pic middle" : "all-pic last"}
      />
      <img
        src={pic2}
        alt=""
        className={first === 1 ? "all-pic middle" : first === 2 ? "all-pic last" : "all-pic front"}
      />
      <img
        src={pic3}
        alt=""
        className={first === 1 ? "all-pic last" : first === 2 ? "all-pic front" : " all-pic middle"}
      />

      <BsCaretDown className="slide-icon" onClick={slider} />
    </div>
  );
}
