import React, { useState } from "react";
import kDice from "./kDice";

const DiceButtonComponent = (props) => {
  const [DiceButtonRoll, setDiceButtonRoll] = useState(0);
  const [clicked, setClicked] = useState(false);

  const DiceClickHandler = () => {
    if (clicked === false) {
      setDiceButtonRoll(kDice(1, 100));
      setClicked(true);
    }
  };

  props.onDiceRoll(DiceButtonRoll);

  let defaultView = (
    <div>
      <button id={props.id} className="Dice_button" onClick={DiceClickHandler}>
        {" "}
        {"Dice"}{" "}
      </button>
    </div>
  );

  if (DiceButtonRoll !== 0) {
    defaultView = (
      <div>
        <button
          id={props.id}
          className="Dice_button"
          onClick={DiceClickHandler}
        >
          {" "}
          {DiceButtonRoll}{" "}
        </button>
      </div>
    );
  }

  return defaultView;
};

export default DiceButtonComponent;
