const ChapterContent_IV_c1 = () => {
  const castHiddenStatus = [true, true, false, false, false];
  const casts = [
    {
      id: "c1",
      hiddenStatusIndex: 0,
      castName: "Żołnierska",
      professions: ["WOJOWNIK", "ŁOWCA", "GWARDZISTA", "BARBARZYŃCA"],
    },
    {
      id: "c2",
      hiddenStatusIndex: 1,
      castName: "Rycerska",

      professions: ["RYCERZ", "PALADYN", "CZARNY RYCERZ"],
    },
    {
      id: "c3",
      hiddenStatusIndex: 2,
      castName: "Złodziejska",

      professions: ["ZŁODZIEJ", "ZABÓJCA", "KUPIEC"],
    },
    {
      id: "c4",
      hiddenStatusIndex: 3,
      castName: "Kapłańska",

      professions: ["KAPŁAN", "DRUID", "ASTROLOG", "PÓŁBÓG"],
    },
    {
      id: "c5",
      hiddenStatusIndex: 4,
      castName: "Czarodziejska",

      professions: ["MAG", "CZARNOKSIĘŻNIK", "ILUZJONISTA", "ALCHEMIK"],
    },
  ];

  return (
    <div>
      {casts.map((casts, index) => (
        <div hidden={castHiddenStatus[index]}>{casts.professions}</div>
      ))}
    </div>
  );
};

export default ChapterContent_IV_c1;
