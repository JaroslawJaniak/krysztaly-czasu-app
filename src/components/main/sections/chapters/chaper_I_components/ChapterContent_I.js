import React from "react";
import chp1_sex_info from "./chp1_sex_info";
import chp1_race_description from "./chp1_race_description";

const ChapterContent_I = () => {
  return (
    <div>
      <form>
        {chp1_sex_info.map((chp1_sex_info) => (
          <div id={chp1_sex_info.id} className={chp1_sex_info.classname}>
            <input
              type={chp1_sex_info.type}
              id={chp1_sex_info.id}
              name={chp1_sex_info.title}
              value={chp1_sex_info.title}
              className={chp1_sex_info.classname + "Input"}
            />
            <label for={chp1_sex_info.title}>{chp1_sex_info.title}</label>
          </div>
        ))}
      </form>
      <form>
        {chp1_race_description.map((chp1_race_description) => (
          <div
            id={chp1_race_description.id}
            className={chp1_race_description.classname}
          >
            <input
              type={chp1_race_description.type}
              id={chp1_race_description.id}
              name={chp1_race_description.title}
              value={chp1_race_description.title}
              className={chp1_race_description.classname}
            />
            <label for={chp1_race_description.title}>
              {chp1_race_description.title}
            </label>
            <br />
            {chp1_race_description.text.map((chapterText) => (
              <p>{chapterText}</p>
            ))}
          </div>
        ))}
      </form>
    </div>
  );
};

export default ChapterContent_I;
