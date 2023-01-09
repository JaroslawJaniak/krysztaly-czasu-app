import React from "react";
import Header from "./Header.js";
import Menu from "../menu/Menu.js";
import CharacterSummary from "../characterSummary/CharacterSummary.js";
import WindowInnerSize from "./WindowInnerSize";

import "./Main.css";

const Main = () => {
  return (
    <body>
      <main className="main" role="main">
        <Menu />
        <div className="main__container">
          <Header />
        </div>
        <CharacterSummary />
        <WindowInnerSize />
      </main>
    </body>
  );
};

export default Main;
