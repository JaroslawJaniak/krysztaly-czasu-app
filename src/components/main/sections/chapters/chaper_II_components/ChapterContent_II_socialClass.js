import React from "react";

const ChapterContent_II_socialClass = () => {
  const chapterInfo = {
    title: "Losowanie pochodzenia społecznego",
    tableLabel: "IIb. Tabela WYJŚCIOWA KLASA SPOŁECZNA",
    tableClassname: "table_origin",
  };

  const chapterSocialClassInfo = [
    {
      socialClassName: "BIEDOTA",
      socialClassDescription: "(chłopstwo)",

      socialClassTableInfo: [
        {
          id: "table2_row1",
          k100: "01-05",
          label: "NIŻSZA KLASA NIŻSZA (NKN)",
          text: " — niższa biedota (ubogie chłopstwo); roczny dochód 1k10 sztuk złota; Charyzma -15 pkt.;",
        },
        {
          id: "table2_row2",
          k100: "06-10",
          label: "ŚREDNIA KLASA NIŻSZA (ŚKN)",
          text: " — średnia biedota (typowe chłopstwo); roczny dochód 2k10 sztuk złota; Charyzma -10 pkt.;",
        },
        {
          id: "table2_row3",
          k100: "11-15",
          label: "WYŻSZA KLASA NIŻSZA (WKN)",
          text: " — wyższa biedota (bogate chłopstwo); roczny dochód 5k10 szt. złota; Charyzma -5 pkt.; umie czytać;",
        },
      ],
    },
    {
      socialClassName: "MIESZCZAŃSTWO",
      socialClassDescription: "(ma prawo używać tytułu EL przed imieniem)",

      socialClassTableInfo: [
        {
          id: "table2_row4",
          k100: "16-35",
          label: "NIŻSZA KLASA ŚREDNIA (NKŚ)",
          text: " — ubogie mieszczaństwo; roczny dochód k50 złt; umie czytać i pisać;",
        },
        {
          id: "table2_row5",
          k100: "36-55",
          label: "ŚREDNIA KLASA ŚREDNIA (ŚKŚ)",
          text: " — średnie mieszczaństwo; roczny dochód k100 złt; umie czytać i pisać;",
        },
        {
          id: "table2_row6",
          k100: "56-75",
          label: "WYŻSZA KLASA ŚREDNIA (WKŚ)",
          text: " — bogate mieszczaństwo; roczny dochód 2k100 złt; umie czytać i pisać;",
        },
      ],
    },
    {
      socialClassName: "SZLACHTA",
      socialClassDescription:
        "(może używać tytułu TAN przed imieniem; tylko członkowie tej klasy społecznej mogą zostać rycerzami)",

      socialClassTableInfo: [
        {
          id: "table2_row7",
          k100: "76-85",
          label: "NIŻSZA KLASA WYŻSZA (WKŚ)",
          text: " — uboga szlachta; roczny dochód k100 złt; umie czytać i pisać; CH +5 pkt.;",
        },
        {
          id: "table2_row8",
          k100: "86-90",
          label: "ŚREDNIA KLASA WYŻSZA (WKŚ)",
          text: " — średnia szlachta; roczny dochód 2k100 złt; umie czytać i pisać; CH +10;",
        },
        {
          id: "table2_row9",
          k100: "91-95",
          label: "WYŻSZA KLASA WYŻSZA (WKŚ)",
          text: " — arystokracja i bogata szlachta; roczny dochód 5k100 złt; umie czytać i pisać; CH +15pkt.;",
        },
        {
          id: "table2_row10",
          k100: "96-00",
          label: "ELITA WŁADZY (EW)",
          text: " — członek aktualnie rządzących rodów książęcych (zamiast tan może używać tytułu książę); roczny dochód 10k100 szt. złota; umie czytać i pisać; ma prawo sprowadzania bardzo rzadkich broni; ponadto wie, gdzie za odpowiednią ofiarą może zostać wskrzeszony; CH +20 pkt.",
        },
      ],
    },
  ];

  return (
    <section id="chapter_section2__social_class" class="section2__social_class">
      <h3>{chapterInfo.title}</h3>
      <p>{chapterInfo.tableLabel}</p>
      {chapterSocialClassInfo.map((chapterSocialClassInfo) => (
        <div>
          <h3>{chapterSocialClassInfo.socialClassName}</h3>
          <span>{chapterSocialClassInfo.socialClassDescription}</span>
          <table className={chapterInfo.tableClassname}>
            {chapterSocialClassInfo.socialClassTableInfo.map(
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
