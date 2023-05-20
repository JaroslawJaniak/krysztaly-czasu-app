import React, { useState } from "react";
import Header from "./Header.js";
import Menu from "../menu/Menu.js";
import Sections from "./sections/Sections.js";

import ChapterContent_I from "./sections/chapters/chaper_I_components/ChapterContent_I.js";
import ChapterContent_II from "./sections/chapters/chaper_II_components/ChapterContent_II.js";
import ChapterContent_III from "./sections/chapters/chaper_III_components/ChapterContent_III.js";
import ChapterContent_IV from "./sections/chapters/chapter_IV_components/ChapterContent_IV.js";
import ChapterContent_V from "./sections/chapters/chapter_V_components/ChapterContent_V.js";
import ChapterContent_VI from "./sections/chapters/chapter_VI_components/ChapterContent_VI.js";

import CharacterSummary from "../characterSummary/CharacterSummary.js";
import WindowInnerSize from "./WindowInnerSize";

import "./Main.css";
import "./kc_styles.css";
import "./kc_professions.css";
import "./kc_checkbox.css";
import "./styles.css";

const Main = () => {
  const [summPlaceOfBirthState, setSummPlaceOfBirthState] = useState("—");

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

  const main_chapters_info = [
    {
      id: "s1",
      title: "I. WYBÓR RASY I PŁCI",
      anchor: "#s1",
      subchaptersInfo: [],
      summaryContent: [
        { text: "Płeć: ", value: "—" },
        { text: "Rasa: ", value: "—" },
      ],
      chapterContent: <ChapterContent_I />,
    },
    {
      id: "s2",
      title: "II. LOSOWANIE POCHODZENIA",
      anchor: "#s2",
      subchaptersInfo: [
        {
          subchapterTitle: "Losowanie miejsca urodzenia",
          subchapterHref: "#chapter_section2__place_of_birth",
        },
        {
          subchapterTitle: "Losowanie pochodzenia społecznego",
          subchapterHref: "#chapter_section2__social_className",
        },
      ],
      summaryContent: [
        {
          text: "Miejsce urodzenia: ",
          value: summPlaceOfBirthState,
        },
        { text: "Wyjściowa klasa społeczna: ", value: "—" },
        { text: "Roczny dochód (złt): ", value: "—" },
      ],
      chapterContent: <ChapterContent_II />,
    },
    {
      id: "s3",
      title: "III. LOSOWANIE UŁOMNOŚCI I ZDLONOŚCI NADNATURALNYCH",
      anchor: "#s3",
      subchaptersInfo: [],
      summaryContent: [
        { text: "Ułomności: ", value: "—" },
        { text: "Zdolności nadnaturalne: ", value: "—" },
      ],
      chapterContent: <ChapterContent_III />,
    },
    {
      id: "s4",
      title: "IV. WYBÓR PROFESJI",
      anchor: "#s4",
      subchaptersInfo: [
        {
          subchapterTitle: "Kasta żołnierska",
          subchapterHref: "#profession_cast1",
        },
        {
          subchapterTitle: "Kasta rycerska",
          subchapterHref: "#profession_cast2",
        },
        {
          subchapterTitle: "Kasta złodziejska",
          subchapterHref: "#profession_cast3",
        },
        {
          subchapterTitle: "Kasta kleryczna",
          subchapterHref: "#profession_cast4",
        },
        {
          subchapterTitle: "Kasta czrodziejska",
          subchapterHref: "#profession_cast5",
        },
      ],
      summaryContent: [{ text: "Profesja: ", value: "—" }],
      chapterContent: <ChapterContent_IV />,
    },
    {
      id: "s5",
      title: "V. LOSOWANIE WZROSTU I WAGI",
      anchor: "#s5",
      subchaptersInfo: [],
      summaryContent: [
        { text: "Wzrost: ", value: "—" },
        { text: "Waga: ", value: "—" },
      ],
      chapterContent: <ChapterContent_V />,
    },
    {
      id: "s6",
      title: "VI. LOSOWANIE WSPÓŁCZYNNIKÓW PODSTAWOWYCH",
      anchor: "#s6",
      subchaptersInfo: [
        {
          subchapterTitle: "s6 subchaptersInfo element",
          subchapterHref: "#profession_cast1",
        },
      ],
      summaryContent: [
        { text: "ŻYW: ", value: "—" },
        { text: "SF: ", value: "—" },
        { text: "ZR: ", value: "—" },
        { text: "SZ: ", value: "—" },
        { text: "INT: ", value: "—" },
        { text: "MD: ", value: "—" },
        { text: "UM: ", value: "—" },
        { text: "CH: ", value: "—" },
        { text: "PR: ", value: "—" },
        { text: "WI: ", value: "—" },
        { text: "ZW: ", value: "ghgfshsfhfs" },
        { text: "O/W: ", value: "—" },
      ],
      chapterContent: <ChapterContent_VI />,
    },
  ];

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
