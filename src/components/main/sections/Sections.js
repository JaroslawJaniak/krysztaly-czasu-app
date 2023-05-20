import React, { useState } from "react";

import ChapterContent_I from "./chapters/chaper_I_components/ChapterContent_I";
import ChapterContent_II from "./chapters/chaper_II_components/ChapterContent_II";
import ChapterContent_III from "./chapters/chaper_III_components/ChapterContent_III";
import ChapterContent_IV from "./chapters/chapter_IV_components/ChapterContent_IV";
import ChapterContent_V from "./chapters/chapter_V_components/ChapterContent_V";
import ChapterContent_VI from "./chapters/chapter_VI_components/ChapterContent_VI";

const Sections = (props) => {
  const [getSex, setGetSex] = useState("a");
  const [getRace, setGetRace] = useState("b");
  const [getPlaceOfBirthState, setGetPlaceOfBirthState] = useState("");

  props.getInfoFromChapters(
    getSex,
    getRace,
    getPlaceOfBirthState,
    "getSocialClass",
    "getIncome",
    "getAbl",
    "getDis",
    "getProfName",
    "getHeight",
    "getWeight"
  );

  const main_chapters_info = [
    {
      id: "s1",
      title: "I. WYBÓR RASY I PŁCI",
      anchor: "#s1",
      subchaptersInfo: [],
      summaryContent: ["Płeć: ", "Rasa: "],
      chapterContent: (
        <ChapterContent_I onGetSex={setGetSex} onGetRace={setGetRace} />
      ),
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
      chapterContent: (
        <ChapterContent_II onGetPlaceOfBirth={setGetPlaceOfBirthState} />
      ),
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
      chapterContent: <ChapterContent_V />,
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
      chapterContent: <ChapterContent_VI />,
    },
  ];

  return (
    <div>
      {main_chapters_info.map((chapter) => (
        <section key={chapter.id} id={chapter.id} className="">
          <br />
          <h3 className="stylized">{chapter.title}</h3>
          <div className="content">{chapter.chapterContent}</div>
        </section>
      ))}
    </div>
  );
};
export default Sections;
