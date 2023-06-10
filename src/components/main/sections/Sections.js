import React, { useState } from "react";

import ChapterContent_I from "./chapters/chaper_I_components/ChapterContent_I";
import ChapterContent_II from "./chapters/chaper_II_components/ChapterContent_II";
import ChapterContent_III from "./chapters/chaper_III_components/ChapterContent_III";
import ChapterContent_IV from "./chapters/chapter_IV_components/ChapterContent_IV";
import ChapterContent_V from "./chapters/chapter_V_components/ChapterContent_V";
import ChapterContent_VI from "./chapters/chapter_VI_components/ChapterContent_VI";

import imageMap0 from "../../../images/map0.jpg";

const Sections = (props) => {
  const [getSex, setGetSex] = useState("a");
  const [getRace, setGetRace] = useState("b");
  const [getPlaceOfBirthState, setGetPlaceOfBirthState] = useState("default");
  const [getPlaceOfBirthStateImgSrc, setGetPlaceOfBirthStateImgSrc] =
    useState(imageMap0);
  const [getPlaceOfBirthStatek100Result, setGetPlaceOfBirthStatek100Result] =
    useState(99);

  console.log("-> " + getPlaceOfBirthStateImgSrc);
  console.log("-> " + getPlaceOfBirthStatek100Result);

  props.getInfoFromChapters(
    getSex,
    getRace,
    getPlaceOfBirthState,
    getPlaceOfBirthStateImgSrc,
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
        <ChapterContent_II
          defaultPlcOfBirth={getPlaceOfBirthState}
          defaultPlcOfBirthImgSrc={getPlaceOfBirthStateImgSrc}
          defaultPlcOfBirthK100Result={getPlaceOfBirthStatek100Result}
          onGetPlaceOfBirth={setGetPlaceOfBirthState}
          onGetPlaceOfBirthImgSrc={setGetPlaceOfBirthStateImgSrc}
          onGetPlaceOfBirthK100Result={setGetPlaceOfBirthStatek100Result}
        />
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

  let chapterDeafaultView = <div>chapterDeafaultView</div>;

  if (props.chapterViewId === "s1") {
    chapterDeafaultView = (
      <section id={main_chapters_info[0].id} className="">
        <br />
        <h3 className="stylized">{main_chapters_info[0].title}</h3>
        <div className="content">{main_chapters_info[0].chapterContent}</div>
      </section>
    );
  } else if (props.chapterViewId === "s2") {
    chapterDeafaultView = (
      <section id={main_chapters_info[1].id} className="">
        <br />
        <h3 className="stylized">{main_chapters_info[1].title}</h3>
        <div className="content">{main_chapters_info[1].chapterContent}</div>
      </section>
    );
  } else if (props.chapterViewId === "s3") {
    chapterDeafaultView = (
      <section id={main_chapters_info[2].id} className="">
        <br />
        <h3 className="stylized">{main_chapters_info[2].title}</h3>
        <div className="content">{main_chapters_info[2].chapterContent}</div>
      </section>
    );
  } else if (props.chapterViewId === "s4") {
    chapterDeafaultView = (
      <section id={main_chapters_info[3].id} className="">
        <br />
        <h3 className="stylized">{main_chapters_info[3].title}</h3>
        <div className="content">{main_chapters_info[3].chapterContent}</div>
      </section>
    );
  } else if (props.chapterViewId === "s5") {
    chapterDeafaultView = (
      <section id={main_chapters_info[4].id} className="">
        <br />
        <h3 className="stylized">{main_chapters_info[4].title}</h3>
        <div className="content">{main_chapters_info[4].chapterContent}</div>
      </section>
    );
  } else if (props.chapterViewId === "s6") {
    chapterDeafaultView = (
      <section id={main_chapters_info[5].id} className="">
        <br />
        <h3 className="stylized">{main_chapters_info[5].title}</h3>
        <div className="content">{main_chapters_info[5].chapterContent}</div>
      </section>
    );
  }

  return <div>{chapterDeafaultView}</div>;
};
export default Sections;

/*{main_chapters_info.map((chapter) => (
        <section key={chapter.id} id={chapter.id} className="">
          <br />
          <h3 className="stylized">{chapter.title}</h3>
          <div className="content">{chapter.chapterContent}</div>
        </section>
      ))} */
