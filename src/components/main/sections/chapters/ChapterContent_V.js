import ChapterContent_V_table1 from "./chpter_V_components/ChapterContent_V_table1";
import ChapterContent_V_table2a from "./chpter_V_components/ChapterContent_V_table2a";
import ChapterContent_V_table2b from "./chpter_V_components/ChapterContent_V_table2b";
import ChapterContent_V_k100 from "./chpter_V_components/ChapterContent_V_k100";

const ChapterContent_V = (props) => {
  const chapterInfo = {
    text1: "Losowanie wzrosu i wagi",
    text2: "NIE WYBRANO PŁCI I RASY!",
    text3: 'IDŹ DO: "WYBÓR RASY I PŁCI"',
  };

  const tableHeightWeightContent = [
    {
      id: "ch5t2a1",
      race: "LUDZIE",
      heightMin: 150,
      heightAvr: 170,
      heightMax: 200,
      weightMin: 50,
      weightAvr: 70,
      weightMax: 100,
      age: 15,
    },
    {
      id: "ch5t2a2",
      race: "PÓŁELFY",
      heightMin: 150,
      heightAvr: 170,
      heightMax: 200,
      weightMin: 50,
      weightAvr: 70,
      weightMax: 100,
      age: 30,
    },
    {
      id: "ch5t2a3",
      race: "ELFY",
      heightMin: 160,
      heightAvr: 180,
      heightMax: 210,
      weightMin: 40,
      weightAvr: 50,
      weightMax: 90,
      age: 120,
    },

    {
      id: "ch5t2a4",
      race: "PÓŁOLBRZYMY",
      heightMin: 180,
      heightAvr: 200,
      heightMax: 230,
      weightMin: 80,
      weightAvr: 100,
      weightMax: 130,
      age: 30,
    },
    {
      id: "ch5t2a5",
      race: "PÓŁORKI",
      heightMin: 150,
      heightAvr: 170,
      heightMax: 200,
      weightMin: 50,
      weightAvr: 70,
      weightMax: 100,
      age: 15,
    },
    {
      id: "ch5t2a6",
      race: "KRASNOLUDY",
      heightMin: 100,
      heightAvr: 120,
      heightMax: 150,
      weightMin: 50,
      weightAvr: 70,
      weightMax: 100,
      age: 60,
    },
    {
      id: "ch5t2a7",
      race: "GNOMY",
      heightMin: 100,
      heightAvr: 120,
      heightMax: 150,
      weightMin: 50,
      weightAvr: 70,
      weightMax: 100,
      age: 60,
    },
    {
      id: "ch5t2a8",
      race: "HOBBICI",
      heightMin: 90,
      heightAvr: 110,
      heightMax: 140,
      weightMin: 30,
      weightAvr: 50,
      weightMax: 80,
      age: 30,
    },
    {
      id: "ch5t2a9",
      race: "REPTILIONI",
      heightMin: 150,
      heightAvr: 170,
      heightMax: 200,
      weightMin: 50,
      weightAvr: 70,
      weightMax: 100,
      age: 30,
    },
  ];

  return (
    <div>
      <h3>{chapterInfo.text1}</h3>
      <ChapterContent_V_table1 />
      <div>
        <p id="warning1">{chapterInfo.text2}</p>
        <div>
          <button id="goToRaceGender_button">{chapterInfo.text3}</button>
        </div>
      </div>
      <ChapterContent_V_table2a item={tableHeightWeightContent} />
      <ChapterContent_V_table2b item={tableHeightWeightContent} />
      <ChapterContent_V_k100 />
    </div>
  );
};

export default ChapterContent_V;
