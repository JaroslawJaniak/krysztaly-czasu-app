import React from "react";
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

import main_chapters_info from "./main_chapters_info.js";

import Test from "./test.js";

import "./Main.css";
import "./kc_styles.css";
import "./kc_professions.css";
import "./kc_checkbox.css";
import "./styles.css";

const Main = () => {
  return (
    <body>
      <main className="main" role="main">
        <Menu chapters_info={main_chapters_info} />
        <div className="main__container">
          <Header />
          <div class="main__container__sections">
            <Sections chapters_info={main_chapters_info} />
          </div>
        </div>
        <CharacterSummary chapters_info={main_chapters_info} />
        <WindowInnerSize />
      </main>
    </body>
  );
};

export default Main;
