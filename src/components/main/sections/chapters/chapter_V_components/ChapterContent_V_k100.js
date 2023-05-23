import K100buttonComponent from "../../../../../data/k100/DiceButtonComponent";

const ChapterContent_V_k100 = () => {
  const k100WeightRollResult = (k) => {
    if (k !== 0) {
      console.log("result2: " + k);
    }
  };
  const k100HeightRollResult = (k) => {
    if (k !== 0) {
      console.log("result2: " + k);
    }
  };

  return (
    <div>
      <K100buttonComponent
        id="k100button2"
        imgSrc
        onk100Roll={k100WeightRollResult}
      />
      <span id="result4"></span>
      <div id="tmpl3"></div>
      <div>
        wzrost:
        <span id="height_character"></span>
      </div>
      <K100buttonComponent
        id="k100button3"
        imgSrc
        onk100Roll={k100HeightRollResult}
      />
      <span id="result5"></span>
      <div id="tmpl4"></div>
      <div>
        waga:
        <span id="weight_character"></span>
      </div>
    </div>
  );
};

export default ChapterContent_V_k100;
