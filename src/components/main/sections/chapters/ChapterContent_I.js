import React from "react";

const Chapter_I_test = () => {
  const chapterGenderInfo = [
    {
      id: "male",
      type: "radio",
      title: "Mężczyzna",
      classname: "checkbox__gender",
    },
    {
      id: "female",
      type: "radio",
      title: "Kobieta",
      classname: "checkbox__gender",
    },
  ];

  const chapterRaceDescription = [
    {
      id: "div_race1",
      type: "checkbox",
      title: "Ludzie",
      classname: "race1 checkbox_containerr",
      text: [
        "- +5 pkt. do biegłości w mieczach, lancach, kopiach, kuszach, włóczniach i rapierach;",
        "- samouzdrowienie (czyli automatyczne odzyskiwanie punktów Wytrzymałości utraconych w wyniku odniesionych obrażeń) 2 pkt. obrażeń po każdych 8 godzinach wypoczynku;",
      ],
    },
    {
      id: "div_race2",
      type: "checkbox",
      title: "Półelfy",
      classname: "race2 checkbox_containerr",
      text: [
        "- 10 pkt. do biegłości w mieczach oraz 5 pkt. w łukach. włóczniach i lancach;",
        "- infrawizja (zdolność widzenia w naturalnych ciemnościach) o zasięgu równym 1/10 SZ (metrów);",
        "- samouzdrowienie 1 pkt. obrażeń po 8 godzinach wypoczynku;",
      ],
    },
    {
      id: "div_race3",
      type: "checkbox",
      title: "Elfy",
      classname: "race3 checkbox_containerr",
      text: [
        "- 10 pkt. do biegłości w mieczach i łukach (z wyjątkiem refleksyjnych) oraz 5 pkt. we włóczniach i sztyletach;",
        "- infrawizja o zasięgu równym /10 SZ;",
        "- dwukrotnie większy niż wynikający ze współczynników zasięg słuchu i wzroku;",
        "- samouzdrowienie 1 pkt. obrażeń po 8 godzinach wypoczynku;",
      ],
    },
    {
      id: "div_race4",
      type: "checkbox",
      title: "Półolbrzymy",
      classname: "race4 checkbox_containerr",
      text: [
        "- 5 pkt. do biegłości w kamieniach, maczugach, pałach, młotach oraz w walce na pięści;",
        "- dodatkowa Obrona 5 pkt. i Wyparowania 20 pkt., wynikające z grubości skóry (wszelkich obrażeń odniesionych w wyniku każdego rodzaju ataku - kłutego, tnącego lub obuchowego);",
        "- samouzdrowienie 4 pkt. obrażeń po 8 godzinach wypoczynku;",
      ],
    },
    {
      id: "div_race5",
      type: "checkbox",
      title: "Półorki",
      classname: "race5 checkbox_containerr",
      text: [
        "- 10 pkt. do biegłości w szabiach, łukach refleksyjnych oraz 5 pkt. w nożach;",
        "- infrawizja (1/10 SZ);",
        "- samouzdrowienie 2 pkt. obrażeń po 8 godzinach wypoczynku;",
      ],
    },
    {
      id: "div_race6",
      type: "checkbox",
      title: "Krasnoludy",
      classname: "race6 checkbox_containerr",
      text: [
        "- 10 pkt. do biegłości w toporach oraz 5 pkt. w kuszach, młotach, oskardach i sztyletach;",
        "- infrawizja (2/10 SZ);",
        "- dodatkowa Obrona 5 pkt. i Wyparowania 20 pkt.;",
        "- samouzdrowienie 3 pkt. obrażeń po 8 godzinach wypoczynku;",
      ],
    },
    {
      id: "div_race7",
      type: "checkbox",
      title: "Gnomy",
      classname: "race7 checkbox_containerr",
      text: [
        "- 10 pkt. do biegłości w młotach i toporach oraz 5 pkt. w krótkich mieczach;",
        "- infrawizja (2/10 SZ);",
        "- dodatkowa Obrona 2pkt. i Wyparowania 10 pkt.;",
        "- samouzdrowienie 3 pkt. obrażeń po 8 godzinach wypoczynku;",
      ],
    },
    {
      id: "div_race8",
      type: "checkbox",
      title: "Hobbici",
      classname: "race8 checkbox_containerr",
      text: [
        "- 10 pkt. do biegłości w kamieniach oraz 5 pkt. w krótkich łukach, sztyletach i krótkich mieczach;",
        "- dodatkowa Obrona 5 pkt. i Wyparowania 20 pkt.;",
        "- samouzdrowienie 3 pkt. obrażeń po 8 godzinach wypoczynku;",
      ],
    },
    {
      id: "div_race9",
      type: "checkbox",
      title: "Reptilioni",
      classname: "race9 checkbox_containerr",
      text: [
        "- 10 pkt. do biegłości w toporomieczach i w ataku pazurami oraz 5 pkt. w mieczach i kuszach;",
        "- nie mogą nosić smoczych skór i zbroi o ograniczeniach większych niż 1/2 ZR, 1/2 SZ;",
        "- dodatkowa Obrona 20 pkt. i Wyparowania 60 pki.;",
        "- samouzdrowienie 5 pkt. obrażeń po 8 godzinach wypoczynku;",
      ],
    },
  ];

  return (
    <div>
      <form>
        {chapterGenderInfo.map((chapterGenderInfo) => (
          <div
            id={chapterGenderInfo.id}
            className={chapterGenderInfo.classname}
          >
            <input
              type={chapterGenderInfo.type}
              id={chapterGenderInfo.id}
              name={chapterGenderInfo.title}
              value={chapterGenderInfo.title}
              className={chapterGenderInfo.classname + "Input"}
            />
            <label for={chapterGenderInfo.title}>
              {chapterGenderInfo.title}
            </label>
          </div>
        ))}
      </form>
      <form>
        {chapterRaceDescription.map((chapterRaceDescription) => (
          <div
            id={chapterRaceDescription.id}
            className={chapterRaceDescription.classname}
          >
            <input
              type={chapterRaceDescription.type}
              id={chapterRaceDescription.id}
              name={chapterRaceDescription.title}
              value={chapterRaceDescription.title}
              className={chapterRaceDescription.classname}
            />
            <label for={chapterRaceDescription.title}>
              {chapterRaceDescription.title}
            </label>
            <br />
            {chapterRaceDescription.text.map((chapterText) => (
              <p>{chapterText}</p>
            ))}
          </div>
        ))}
      </form>
    </div>
  );
};

export default Chapter_I_test;
