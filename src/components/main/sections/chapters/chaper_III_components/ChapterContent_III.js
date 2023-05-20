import chp3_info from "./chp3_info";
import K100buttonComponent from "../../../../../data/k100/K100buttonComponent";

const ChapterContent_III = () => {
  return (
    <div>
      {chp3_info.map((chp3_info) => (
        <div>
          <h3>{chp3_info.title}</h3>
          <div id={chp3_info.id}>
            <p>
              {chp3_info.text1}
              <button
                id="k100_button_section3_abilities1"
                class="button_inline"
              >
                <span class="type_dice2">{chp3_info.text2}</span>
              </button>
              <span id="section3_abilities_result1"></span>
              <div>
                {chp3_info.text3}
                <span id="section3_abilitiesName1">{chp3_info.text4}</span>;
              </div>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChapterContent_III;
