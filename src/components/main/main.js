import React, { useState } from "react";
import Header from "./Header.js";
import Menu from "../menu/Menu.js";
import Sections from "./sections/Sections.js";

import CharacterSummary from "../characterSummary/CharacterSummary.js";
import WindowInnerSize from "./WindowInnerSize";

import main_chapters_info from "./main_chapters_info.js";

import Test from "./test.js";

import "./Main.css";
import "./kc_styles.css";
import "./kc_professions.css";
import "./kc_checkbox.css";
import "./styles.css";

const Main = () => {
  const [summPlaceOfBirthState, setSummPlaceOfBirthState] = useState("");

  const getInfoFromChapters = (
    getSex,
    getRace,
    getPlcOfBirth,
    getSocialClass,
    getIncome,
    getAbl,
    getDis,
    getProfName,
    getHeight,
    getWeight
  ) => {
    setSummPlaceOfBirthState(getPlcOfBirth);
  };

  return (
    <body>
      <main className="main" role="main">
        <Menu chapters_info={main_chapters_info} />
        <div className="main__container">
          <Header />
          <div class="main__container__sections">
            <Sections chapters_info getInfoFromChapters={getInfoFromChapters} />
          </div>
        </div>
        <CharacterSummary
          chapters_info={main_chapters_info}
          summPlaceOfBirthState={summPlaceOfBirthState}
        />
        <WindowInnerSize />
      </main>
    </body>
  );
};

export default Main;
