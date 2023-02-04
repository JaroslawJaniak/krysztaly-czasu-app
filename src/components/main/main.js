import React from "react";
import Header from "./Header.js";
import Menu from "../menu/Menu.js";
import CharacterSummary from "../characterSummary/CharacterSummary.js";
import WindowInnerSize from "./WindowInnerSize";

import "./Main.css";

const Main = () => {
  const CHAPTERS_INFO = [
    {
      id: "s1",
      title: "I. WYBÓR RASY I PŁCI",
      anchor: "#chapter_section1",
    },
    {
      id: "s2",
      title: "II. LOSOWANIE POCHODZENIA",
      anchor: "#chapter_section2",
    },
    {
      id: "s3",
      title: "III. LOSOWANIE UŁOMNOŚCI I ZDLONOŚCI NADNATURALNYCH",
      anchor: "#chapter_section3",
    },
    {
      id: "s4",
      title: "IV. WYBÓR PROFESJI",
      anchor: "#chapter_section4",
    },
    {
      id: "s5",
      title: "V. LOSOWANIE WZROSTU I WAGI",
      anchor: "#chapter_section5",
    },
    {
      id: "s6",
      title: "VI. LOSOWANIE WSPÓŁCZYNNIKÓW PODSTAWOWYCH",
      anchor: "#chapter_section6",
    },
  ];
  return (
    <body>
      <main className="main" role="main">
        <Menu chapters_info={CHAPTERS_INFO} />
        <div className="main__container">
          <Header />
        </div>
        <CharacterSummary chapters_info={CHAPTERS_INFO} />
        <WindowInnerSize />
      </main>
    </body>
  );
};

export default Main;
