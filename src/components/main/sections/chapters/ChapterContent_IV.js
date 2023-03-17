import Subprofession from "./chapter_IV_components/Subprofession";
const ChapterContent_IV = () => {
  const chapterInfo = [
    {
      id: "tmpl1",
      castName: "Żołnierska",
      text1: "Czy postać ma ułomność (20% szansa)->",
      text2: "k100",
      text3: "ułomność:",
      text4: "brak",
    },
  ];

  const allProfessions = [
    ["WOJOWNIK", "ŁOWCA", "GWARDZISTA", "BARBARZYŃCA"],
    ["RYCERZ", "PALADYN", "CZARNY RYCERZ"],
    ["ZŁODZIEJ", "ZABÓJCA", "KUPIEC"],
    ["KAPŁAN", "DRUID", "ASTROLOG", "PÓŁBÓG"],
    ["MAG", "CZARNOKSIĘŻNIK", "ILUZJONISTA", "ALCHEMIK"],
  ];

  const casts = [
    {
      id: "c1",
      castName: "ŻOŁNIERSKA",
      castHiddenStatus: [true, true, false, false, false],
      professions: [
        {
          profName: "WOJOWNIK",
          subbProfHiddenStatus: [
            [true, true, true, true],
            [true, true, true],
            [false, false, false],
            [false, false, false, true],
            [false, false, false, false],
          ],
        },
        {
          profName: "ŁOWCA",
          subbProfHiddenStatus: [
            [true, true, true, true],
            [true, true, true],
            [true, true, false],
            [false, false, true, true],
            [false, true, true, true],
          ],
        },
        {
          profName: "GWARDZISTA",
          subbProfHiddenStatus: [
            [true, true, true, true],
            [true, true, true],
            [true, false, true],
            [false, true, true, true],
            [true, true, true, true],
          ],
        },
        {
          profName: "BARBARZYŃCA",
          subbProfHiddenStatus: [
            [true, true, true, true],
            [true, true, true],
            [false, false, false],
            [false, true, true, true],
            [true, true, true, true],
          ],
        },
      ],
    },
    {
      id: "c2",
      castName: "RYCERSKA",
      castHiddenStatus: [true, true, false, false, false],
      professions: [
        {
          profName: "RYCERZ",
          subbProfHiddenStatus: [
            [true, true, true, true],
            [true, true, true],
            [true, true, true],
            [false, true, true, true],
            [true, true, true, true],
          ],
        },
        {
          profName: "PALADYN",
          subbProfHiddenStatus: [
            [true, true, true, true],
            [true, true, true],
            [true, true, true],
            [true, true, false, true],
            [true, true, true, true],
          ],
        },
        {
          profName: "CZARNY RYCERZ",
          subbProfHiddenStatus: [
            [true, true, true, true],
            [true, true, true],
            [true, true, true],
            [false, true, true, true],
            [true, true, true, true],
          ],
        },
      ],
    },
    {
      id: "c3",
      castName: "ZŁODZIEJSKA",
      castHiddenStatus: [false, false, true, false, false],
      professions: [
        {
          profName: "ZŁODZIEJ",
          subbProfHiddenStatus: [
            [false, true, true, false],
            [true, true, true],
            [true, true, true],
            [false, true, true, true],
            [false, true, false, false],
          ],
        },
        {
          profName: "ZABÓJCA",
          subbProfHiddenStatus: [
            [false, true, false, false],
            [true, true, true],
            [true, true, true],
            [false, true, false, true],
            [false, false, false, false],
          ],
        },
        {
          profName: "KUPIEC",
          subbProfHiddenStatus: [
            [false, false, false, false],
            [true, true, true],
            [false, false, true],
            [false, false, false, true],
            [false, false, false, false],
          ],
        },
      ],
    },
    {
      id: "c4",
      castName: "KAPŁAŃSKA",
      castHiddenStatus: [false, false, false, true, false],

      professions: [
        {
          profName: "KAPŁAN",
          subbProfHiddenStatus: [
            [false, false, false, false],
            [false, true, false],
            [false, false, false],
            [true, true, true, true],
            [false, false, false, false],
          ],
        },
        {
          profName: "DRIUD",
          subbProfHiddenStatus: [
            [false, false, true, true],
            [true, true, true],
            [true, true, true],
            [true, true, true, true],
            [false, true, true, true],
          ],
        },
        {
          profName: "ASTROLOG",
          subbProfHiddenStatus: [
            [false, true, true, true],
            [true, true, true],
            [true, true, false],
            [true, true, true, true],
            [true, true, true, true],
          ],
        },
        {
          profName: "PÓŁBÓG",
          subbProfHiddenStatus: [
            [true, true, true, true],
            [true, true, true],
            [true, true, true],
            [true, true, true, true],
            [true, true, true, true],
          ],
        },
      ],
    },
    {
      id: "c5",
      castName: "CZARODZIEJSKA",
      castHiddenStatus: [false, false, false, false, true],
      professions: [
        {
          profName: "MAG",
          subbProfHiddenStatus: [
            [true, true, true, true],
            [true, true, true],
            [false, false, false],
            [false, false, false, true],
            [false, false, false, false],
          ],
        },
        {
          profName: "CZARNOKSIĘŻNIK",
          subbProfHiddenStatus: [
            [false, true, true, true],
            [true, true, true],
            [true, false, false],
            [false, true, false, true],
            [false, false, false, false],
          ],
        },
        {
          profName: "ILUZJONISTA",
          subbProfHiddenStatus: [
            [false, true, true, true],
            [true, true, true],
            [false, false, false],
            [false, true, false, true],
            [false, false, false, false],
          ],
        },
        {
          profName: "ALCHEMIK",
          subbProfHiddenStatus: [
            [false, true, true, true],
            [true, true, true],
            [false, false, false],
            [false, true, false, true],
            [false, false, true, true],
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <div class="multiple_class">
        <input
          type="checkbox"
          id="secondClassCheckbox"
          name="secondClassCheckbox"
          value="Dwuklasowiec"
          className="checkbox__class"
        />
        <label for="secondClassCheckbox">Dwie profesje</label>
        <small>
          (* - w wyjątkowych/uzasadnionych okolicznościach, za zgodą MG)
        </small>
      </div>

      <h4></h4>
      <section className="collapsible-sections--item__content--section casts">
        <section
          id="profession_cast1"
          className="subprofession_cast profession_cast"
        >
          {casts.map((casts1, index1) => (
            <div>
              <h4> KASTA {casts1.castName}</h4>
              <br />
              {casts1.professions.map((prof, index) => (
                <div
                  id={"div_profession" + index}
                  className="subprofession_container checkbox_container"
                >
                  <div>
                    <input
                      type="checkbox"
                      id={prof.profName + casts1.id}
                      name={prof.profName}
                      value={prof.profName}
                      className="checkbox__profession"
                    />
                    <label for={prof.profName}>
                      <b>{prof.profName + " " + index}</b>
                    </label>
                  </div>

                  {prof.subbProfHiddenStatus.map(
                    (subbProfHiddenStat, indexHiddenStat) => (
                      <div hidden={casts1.castHiddenStatus[indexHiddenStat]}>
                        {subbProfHiddenStat.map((stat) => stat.toString())}
                      </div>
                    )
                  )}
                </div>
              ))}
              <br />
            </div>
          ))}

          <br />
        </section>

        <section id="profession_cast2" class="subprofession_cast"></section>
        <section id="profession_cast3" class="subprofession_cast"></section>
        <section id="profession_cast4" class="subprofession_cast"></section>
      </section>
    </div>
  );
};

export default ChapterContent_IV;

/*

<ChapterContent_IV_subprofessions
                  items={casts}
                  hiddenStatutsIndex={index}
                />





                {casts.map((casts1) => (
            <div>
              <h4>{casts1.castName}</h4>
              <br />
              {casts1.castHiddenStatus.map((hiddenStatus, index) => (
                <div>
                  <div>{index}</div>
                  <div>{hiddenStatus.toString()}</div>
                  <div>{casts.map((cast2) => cast2.professions)}</div>
                </div>
              ))}
              <br />
            </div>
          ))}




          {casts.map((casts1, index1) => (
            <div>
              <h4> KASTA {casts1.castName}</h4>
              <br />
              {casts1.professions.map((prof, index) => (
                <div
                  id={"div_profession" + index}
                  className="subprofession_container checkbox_container"
                >
                  <div>
                    <input
                      type="checkbox"
                      id={prof.profName + casts1.id}
                      name={prof.profName}
                      value={prof.profName}
                      className="checkbox__profession"
                    />
                    <label for={prof.profName}>
                      <b>{prof.profName + " " + index}</b>
                    </label>
                  </div>
                  {prof.subbProfHiddenStatus.map((stat1, index) => (
                    <div
                      id="profession_container__subelement-profession9"
                      className="subprofession_container__subelement profession_container__subelement_hidden"
                    >
                      <div className="subprofession_container">
                        {stat1.toString()}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              <br />
            </div>
          ))}
*/
