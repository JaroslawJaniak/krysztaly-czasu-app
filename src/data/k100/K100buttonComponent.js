import React, { useState } from "react";
import k100dice from "./k100dice";

const K100buttonComponent = (props) => {
  const [k100ButtonRoll, setk100ButtonRoll] = useState(0);
  const [clicked, setClicked] = useState(false);

  const k100ClickHandler = () => {
    if (clicked === false) {
      setk100ButtonRoll(k100dice());
      setClicked(true);
    }
  };

  props.onk100Roll(k100ButtonRoll);

  let defaultView = (
    <div>
      <button id={props.id} className="k100_button" onClick={k100ClickHandler}>
        {" "}
        {"k100"}{" "}
      </button>
    </div>
  );

  if (k100ButtonRoll !== 0) {
    defaultView = (
      <div>
        <button
          id={props.id}
          className="k100_button"
          onClick={k100ClickHandler}
        >
          {" "}
          {k100ButtonRoll}{" "}
        </button>
      </div>
    );
  }

  return defaultView;
};

export default K100buttonComponent;
