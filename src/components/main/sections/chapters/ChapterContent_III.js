const ChapterContent_III = () => {
  const chapterInfo = [
    {
      id: "tmpl1",
      title: "III.a Ułomności",
      text1: "Czy postać ma ułomność (20% szansa)->",
      text2: "k100",
      text3: "ułomność:",
      text4: "brak",
    },
    {
      id: "tmpl2",
      title: "III.b Zdolności nadnaturalne",
      text1: "Czy postać ma zdolność nadnaturalną (10% szansa)->",
      text2: "k100",
      text3: "zdolność nadnaturalna:",
      text4: "brak",
    },
  ];

  return (
    <div>
      {chapterInfo.map((chapterInfo) => (
        <div>
          <h3>{chapterInfo.title}</h3>
          <div id={chapterInfo.id}>
            <p>
              {chapterInfo.text1}
              <button
                id="k100_button_section3_abilities1"
                class="button_inline"
              >
                <span class="type_dice2">{chapterInfo.text2}</span>
              </button>
              <span id="section3_abilities_result1"></span>
              <div>
                {chapterInfo.text3}
                <span id="section3_abilitiesName1">{chapterInfo.text4}</span>;
              </div>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChapterContent_III;
