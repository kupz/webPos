import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

export default function ReceiptItem(props) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevState) => {
      return prevState + 1;
    });
  };

  const handleDecrement = () => {
    setQuantity((prevState) => {
      return prevState - 1;
    });
  };

  const handleOnchange = (e) => {
    if (!isNaN(e.target.value)) {
      setQuantity(parseInt(e.target.value));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span onClick={handleIncrement} style={{ cursor: "pointer" }}>
          <ArrowDropUpIcon />
        </span>
        <input
          type="text"
          style={{
            width: "40px",
            textAlign: "center",
            padding: "1px",
            border: "0",
            outline: "none",
          }}
          value={quantity}
          onChange={handleOnchange}
        />
        <span onClick={handleDecrement} style={{ cursor: "pointer" }}>
          <ArrowDropDownIcon />
        </span>
      </span>
      <p>sample</p>
      <p>199</p>
      <p>1000</p>
    </div>
  );
}
