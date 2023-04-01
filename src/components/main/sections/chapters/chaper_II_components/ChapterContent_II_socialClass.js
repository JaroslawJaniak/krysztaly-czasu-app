import React from "react";
import chp2_info2 from "./chp2_info2";
import chp2_table_social_class from "./chp2_table-social-class";

const ChapterContent_II_socialClass = () => {
  return (
    <section id="chapter_section2__social_class" class="section2__social_class">
      <h3>{chp2_info2.title}</h3>
      <p>{chp2_info2.tableLabel}</p>
      {chp2_table_social_class.map((chp2_table_social_class) => (
        <div>
          <h3>{chp2_table_social_class.socialClassName}</h3>
          <span>{chp2_table_social_class.socialClassDescription}</span>
          <table className={chp2_info2.tableClassname}>
            {chp2_table_social_class.socialClassTableInfo.map(
              (socialClassTableInfo) => (
                <tr id={socialClassTableInfo.id}>
                  <td class="td__k100">{socialClassTableInfo.k100}</td>
                  <td>
                    <b>{socialClassTableInfo.label}</b>
                    {socialClassTableInfo.text}
                  </td>
                </tr>
              )
            )}
          </table>
        </div>
      ))}
      <button id="k100_button_social_class" class="k100_button">
        k100
      </button>{" "}
      <span id="result2"></span>
      <div>
        <div>
          wyjściowa klasa społeczna:
          <span id="social_class"></span>
        </div>
      </div>
      <button id="k100_button_social_class_benefice">
        <span class="type_dice1">k100</span>
      </button>{" "}
      <span id="social_class_benefice_result">0</span>
      <div>
        <div>
          roczny dochód:
          <span id="social_class_benefice">0</span> złt;
        </div>
      </div>
    </section>
  );
};

export default ChapterContent_II_socialClass;
