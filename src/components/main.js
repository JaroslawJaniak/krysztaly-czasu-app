import React from "react";
import WindowInnerSize from "./windowInnerSize";

const Main = () => {
  return (
    <body>
      <main className="main" role="main">
        <div className="main__container"></div>
        <WindowInnerSize />
      </main>
    </body>
  );
};

export default Main;
