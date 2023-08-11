import React, { useState } from "react";

import mapImage from "../../../../../images/map0.jpg";
import chp2_info1 from "./chp2_info1";
import chp2_place_of_birth from "./chp2_table-place-of-birth";

import DiceButtonComponent from "../../../../../data/k100/DiceButtonComponent";

import dataPlaceOfBirth from "./chp2_placeOfBirth_Data";

const ChapterContent_II_placeOfBirth = (props) => {
  const [placeOfBirthState, setPlaceOfBirthState] = useState(
    props.defaultPlcOfBirth
  );
  const [srcImageState, setSrcImageState] = useState(
    props.defaultPlcOfBirthImgSrc
  );
  const [k100ResultState, setk100ResultState] = useState(
    props.defaultPlcOfBirthK100Result
  );
  const [table_trIdState, setTable_trIdState] = useState(
    props.defaultPlcOfBirthTrId
  );

  console.log("0sdsdsad: " + table_trIdState);

  console.log("1sdsdsad: " + k100ResultState);
  console.log("2sdsdsad: " + table_trIdState);

  const k100RollResult = (k) => {
    if (k !== 0) {
      setPlaceOfBirthState(dataPlaceOfBirth(k).plcBirth);
      setSrcImageState(dataPlaceOfBirth(k).srcImage);
      setTable_trIdState(dataPlaceOfBirth(k).table_trId);
      setk100ResultState(k);
      props.onGetPlaceOfBirth(
        placeOfBirthState,
        srcImageState,
        k100ResultState,
        table_trIdState
      );

      document
        .getElementById("table1_tr" + table_trIdState)
        .classList.add("activeTrTable");
    }
  };

  const chp2_place_of_birth = [
    {
      id: "table1_tr1",
      k100: "01-16",

      placeOfBirth: "Ostrogar",
      text: " — stolica Archipelagu Centralnego i orków; ok. 153tys. mieszkańców — orki, półorki, ludzie, półolbrzymy, półelfy, elfy, gnomy, krasnoludy, hobbici;",
    },
    {
      id: "table1_tr2",
      k100: "17-25",

      placeOfBirth: "Get-warr-gar",
      text: " — miasto portowe i stolica kupiectwa; ok.72 tys. mieszkańców — ludzie, półorki, orki, półelfy, elfy, krasnoludy, gnomy, hobbici, reptilioni;",
    },
    {
      id: "table1_tr3",
      k100: "26-30",

      placeOfBirth: "Ranhar-gar",
      text: " — miasto portowe i stolica kupiectwa; ok.72 tys. mieszkańców — ludzie, półorki, orki, półelfy, elfy, kras- noludy, gnomy, hobbici, reptilioni;",
    },
    {
      id: "table1_tr4",
      k100: "31-34",

      placeOfBirth: "Ora-gar",
      text: " — stolica półolbrzymów, miasto portowe; ok. 34 tys. mieszkanców — półolbrzymy, olbrzymy, orki, półorki, krasnoludy, reptilioni;",
    },
    {
      id: "table1_tr5",
      k100: "35-38",

      placeOfBirth: "Gasta",
      text: " — stolica repiillionów, miasto — twierdza; około 34 tys. mieszkańców — reptillioni, krasnoludy, hobbici, gnomy i ludzie;",
    },
    {
      id: "table1_tr6",
      k100: "39-42",

      placeOfBirth: "Olgrion",
      text: " — stolica eltów; ok. 31 tys. mieszkańców — elfy, półelfy;",
    },
    {
      id: "table1_tr7",
      k100: "43-45",

      placeOfBirth: "Tagara Ciemna",
      text: " — jedna ze stolic ludzkich; ok. 29 tys. mieszkańców — ludzie;",
    },
    {
      id: "table1_tr8",
      k100: "46-48",

      placeOfBirth: "Ongir-gar",
      text: " — miasto portowe; ok. 24 tys. mieszkanców — elfy, półelfy, ludzie, półorki, orki;",
    },
    {
      id: "table1_tr9",
      k100: "49-51",

      placeOfBirth: "Aria-gar",
      text: " — ok. 22 tys. mieszkańców — orki, półorki, ludzie, hobbici, gnomy, reptilioni;",
    },
    {
      id: "table1_tr10",
      k100: "52-54",

      placeOfBirth: "Inchra-gar",
      text: " — ok. 21 tys. mieszkańców — orki, półorki, ludzie;",
    },
    {
      id: "table1_tr11",
      k100: "55-56",

      placeOfBirth: "Tagara Szara",
      text: " — jedna ze stolic ludzkich; ok. 19 tys. mieszkańców — ludzie;",
    },
    {
      id: "table1_tr12",
      k100: "57-58",

      placeOfBirth: "Tagara Biała",
      text: " — jedna ze stolic ludzkich; ok. 15,5 tys. mieszkańców — ludzie, krasnoludy;",
    },
    {
      id: "table1_tr13",
      k100: "59-60",

      placeOfBirth: "Ogragar",
      text: " — stolica ogrów, miasto portowe; ok. 13 tys. mieszkańców — ogry, półorki, orki, krasnoludy;",
    },
    {
      id: "table1_tr14",
      k100: "61-80",

      placeOfBirth: "rejony Orcusa oddalone od miast;",
      text: " wiejskie, ew. samotne posiadłości;",
    },
    {
      id: "table1_tr15",
      k100: "81-99",

      placeOfBirth: "wyspy, leżące wokół Orcusa;",
      text: "",
    },
    {
      id: "table1_tr16",
      k100: "00",

      placeOfBirth: "miejsce urodzenia nieznane",
      text: "(postać może pochodzić np. z innego archipelagu, lub też po prostu nie wiedzieć gdzie się urodziła);",
    },
  ];

  return (
    <section
      id="chapter_section2__place_of_birth"
      className="section2__place_of_birth"
    >
      <h3>{chp2_info1.title}</h3>
      <p>{chp2_info1.tableLabel}</p>
      <table id="table1_origin_place_of_birth" className="table_origin">
        {chp2_place_of_birth.map((chp2_place_of_birth) => (
          <tr id={chp2_place_of_birth.id} className={"td__k100"}>
            <td className="td__k100">{chp2_place_of_birth.k100}</td>
            <td>
              <b>{chp2_place_of_birth.placeOfBirth}</b>
              {chp2_place_of_birth.text}
            </td>
          </tr>
        ))}
      </table>
      <DiceButtonComponent
        id="k100button1"
        n={1}
        k={100}
        defaultDiceResult={k100ResultState}
        onDiceRoll={k100RollResult}
      />

      <div>
        <div>
          miejsce urodzenia:
          <span id="place_of_birth"> {placeOfBirthState}</span>
        </div>
        <img id="map" src={srcImageState} alt="map" className="mapImage" />
      </div>
    </section>
  );
};

export default ChapterContent_II_placeOfBirth;
