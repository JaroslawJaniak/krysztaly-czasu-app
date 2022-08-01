import React from "react";
import Menu from "./menu/Menu.js";
import CharacterSummary from "./characterSummary/CharacterSummary.js";
import WindowInnerSize from "./windowInnerSize";

import "./main.css";

const Main = () => {
  return (
    <body>
      <main className="main" role="main">
        <Menu />
        <div className="main__container"></div>
        <CharacterSummary />
        <WindowInnerSize />
      </main>
    </body>
  );
};

export default Main;
