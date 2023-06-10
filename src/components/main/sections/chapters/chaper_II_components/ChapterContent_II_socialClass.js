import React, { useState } from "react";
import chp2_info2 from "./chp2_info2";
import chp2_table_social_class from "./chp2_table-social-class";
import DiceButtonComponent from "../../../../../data/k100/DiceButtonComponent";
import dataSocialClass from "./chp2_socialClass_Data";

const ChapterContent_II_socialClass = () => {
  const [socialClassState, setSocialClassState] = useState(
    "props.defaultSocialClass"
  );

  const [k100ResultState, setk100ResultState] = useState(
    "props.defaultSocialClassK100Result"
  );

  const [k100ResultState2, setk100ResultState2] = useState("dice_n  dice_k");
  const [table_trIdState, setTable_trIdState] = useState("");
  const [dice_n, setDice_n] = useState("0");
  const [dice_k, setDice_k] = useState("0");
  const [bonusStat, setBonusStat] = useState("");
  const [beneficeValue, setBeneficeValue] = useState("");

  console.log("sdsdsad: " + k100ResultState);

  const k100RollResult = (k) => {
    if (k !== 0) {
      setSocialClassState(dataSocialClass(k).socialClass);
      setTable_trIdState(dataSocialClass(k).table_trId);
      setk100ResultState(k);
      setDice_n(dataSocialClass(k).n);
      setDice_k(dataSocialClass(k).k);
      setBonusStat(dataSocialClass(k).bonusStat);
      setk100ResultState2(dice_n + "k" + dice_k);

      document
        .getElementById("table2_row" + table_trIdState)
        .classList.add("activeTrTable");
    }
  };

  const k100RollResult2 = (k) => {
    if (k !== 0) {
      setBeneficeValue();
    }
  };

  return (
    <section id="chapter_section2__social_class" class="section2__social_class">
      <h3>{chp2_info2.title}</h3>
      <p>{chp2_info2.tableLabel}</p>
      {chp2_table_social_class.map((chp2_table_social_class) => (
        <div>
          <h3>{chp2_table_social_class.socialClassName}</h3>
          <span>{chp2_table_social_class.socialClassDescription}</span>
          <table className={chp2_info2.tableClassname}>
            {chp2_table_social_class.socialClassTableInfo.map(
              (socialClassTableInfo) => (
                <tr id={socialClassTableInfo.id}>
                  <td class="td__k100">{socialClassTableInfo.k100}</td>
                  <td>
                    <b>{socialClassTableInfo.label}</b>
                    {socialClassTableInfo.text}
                  </td>
                </tr>
              )
            )}
          </table>
        </div>
      ))}
      <div>
        <DiceButtonComponent
          id="k100button2"
          n={1}
          k={100}
          defaultDiceResult={k100ResultState}
          onDiceRoll={k100RollResult}
        />
        <div>
          wyjściowa klasa społeczna: <span id="social_class"></span>
        </div>
      </div>
      <button id="k100_button_social_class_benefice">
        <span class="type_dice1">k100</span>
      </button>{" "}
      <span id="social_class_benefice_result">0</span>
      <div>
        <DiceButtonComponent
          id="k100button3"
          n={dice_n}
          k={dice_k}
          defaultDiceResult={k100ResultState2}
          onDiceRoll={k100RollResult2}
        />
        <div>
          roczny dochód:
          <span id="social_class_benefice">0</span> złt;
        </div>
      </div>
    </section>
  );
};

export default ChapterContent_II_socialClass;
