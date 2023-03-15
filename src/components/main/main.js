import React from "react";
import Header from "./Header.js";
import Menu from "../menu/Menu.js";
import Sections from "./sections/Sections.js";
import ChapterContent_I from "./sections/chapters/ChapterContent_I.js";
import ChapterContent_II from "./sections/chapters/ChapterContent_II.js";
import ChapterContent_III from "./sections/chapters/ChapterContent_III.js";
import ChapterContent_IV from "./sections/chapters/ChapterContent_IV.js";
import CharacterSummary from "../characterSummary/CharacterSummary.js";
import WindowInnerSize from "./WindowInnerSize";

import Test from "./test.js";

import "./Main.css";
import "./kc_styles.css";
import "./kc_professions.css";
import "./kc_checkbox.css";
import "./styles.css";

const Main = () => {
  const CHAPTERS_INFO = [
    {
      id: "s1",
      title: "I. WYBÓR RASY I PŁCI",
      anchor: "#s1",
      subchaptersInfo: [],
      summaryContent: ["Płeć: ", "Rasa: "],
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
        "Miejsce urodzenia: ",
        "Wyjściowa klasa społeczna: ",
        "Roczny dochód (złt): ",
      ],
      chapterContent: <ChapterContent_II />,
    },
    {
      id: "s3",
      title: "III. LOSOWANIE UŁOMNOŚCI I ZDLONOŚCI NADNATURALNYCH",
      anchor: "#s3",
      subchaptersInfo: [],
      summaryContent: ["Ułomności: ", "Zdolności nadnaturalne: "],
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
      summaryContent: ["Profesja: "],
      chapterContent: <ChapterContent_IV />,
    },
    {
      id: "s5",
      title: "V. LOSOWANIE WZROSTU I WAGI",
      anchor: "#s5",
      subchaptersInfo: [],
      summaryContent: ["Wzrost: ", "Waga: "],
      chapterContent: <ChapterContent_I />,
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
        {
          subchapterTitle: "s6 subchaptersInfo element",
          subchapterHref: "#profession_cast1",
        },
        {
          subchapterTitle: "s6 subchaptersInfo element",
          subchapterHref: "#profession_cast1",
        },
        {
          subchapterTitle: "s6 subchaptersInfo element",
          subchapterHref: "#profession_cast1",
        },
        {
          subchapterTitle: "s6 subchaptersInfo element",
          subchapterHref: "#profession_cast1",
        },
      ],
      summaryContent: [
        "ŻYW: ",
        "SF: ",
        "ZR: ",
        "SZ: ",
        "INT: ",
        "MD: ",
        "UM: ",
        "CH: ",
        "PR: ",
        "WI: ",
        "ZW: ",
        "O/W: ",
      ],
      chapterContent: <ChapterContent_I />,
    },
  ];

  return (
    <body>
      <main className="main" role="main">
        <Menu chapters_info={CHAPTERS_INFO} />
        <div className="main__container">
          <Header />
          <div class="main__container__sections">
            <Sections chapters_info={CHAPTERS_INFO} />
          </div>
        </div>
        <CharacterSummary chapters_info={CHAPTERS_INFO} />
        <WindowInnerSize />
      </main>
    </body>
  );
};

export default Main;
