import React, { useState } from "react";
import k100dice from "./k100dice";

const K100buttonComponent = (props) => {
  const [k100ButtonRoll, setk100ButtonRoll] = useState("k100");

  const k100ClickHandler = () => {
    setk100ButtonRoll(k100dice());
  };

  props.onk100Roll(k100ButtonRoll);

  return (
    <div>
      <button
        id="k100_button"
        className="k100_button"
        onClick={k100ClickHandler}
      >
        {" "}
        {k100ButtonRoll}{" "}
      </button>
    </div>
  );
};

export default K100buttonComponent;
