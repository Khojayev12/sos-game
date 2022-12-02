import { useState } from "react";
import pic1 from "../assets/images/pic1.webp";
import pic2 from "../assets/images/1234.webp";
import pic3 from "../assets/images/987.webp";
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
        width={first === 1 ? "501px" : first === 2 ? "483px" : "483px"}
        height={first === 1 ? "610px" : first === 2 ? "563px" : "511px"}
      />
      <img
        src={pic2}
        alt=""
        className={first === 1 ? "all-pic middle" : first === 2 ? "all-pic last" : "all-pic front"}
        width={first === 1 ? "483px" : first === 2 ? "483px" : "501px"}
        height={first === 1 ? "563px" : first === 2 ? "511px" : "610px"}
      />
      <img
        src={pic3}
        alt=""
        className={first === 1 ? "all-pic last" : first === 2 ? "all-pic front" : " all-pic middle"}
        width={first === 1 ? "483px" : first === 2 ? "501px" : "483px"}
        height={first === 1 ? "511px" : first === 2 ? "610px" : "563px"}
      />

      <BsCaretDown className="slide-icon" onClick={slider} />
    </div>
  );
}
