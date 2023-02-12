import kc_logo from "../../../../images/map0.jpg";

const ChapterContent_II = (props) => {
  const chapterPlaceOfBirthInfo = [
    {
      id: "table1_tr1",
      k100: "01-16",
      placeOfBirth: "Ostrogar",
      text: " — stolica Archipelagu Centralnego i orków; ok. 153tys. mieszkańców — orki, półorki, ludzie, półolbrzymy, półelfy, elfy, gnomy, krasnoludy, hobbici;",
    },
    {
      id: "table1_tr2",
      k100: "17-25",
      placeOfBirth: "Get-warr-gar",
      text: " — miasto portowe i stolica kupiectwa; ok.72 tys. mieszkańców — ludzie, półorki, orki, półelfy, elfy, krasnoludy, gnomy, hobbici, reptilioni;",
    },
    {
      id: "table1_tr3",
      k100: "26-30",
      placeOfBirth: "Ranhar-gar",
      text: " — miasto portowe i stolica kupiectwa; ok.72 tys. mieszkańców — ludzie, półorki, orki, półelfy, elfy, kras- noludy, gnomy, hobbici, reptilioni;",
    },
    {
      id: "table1_tr4",
      k100: "31-34",
      placeOfBirth: "Ora-gar",
      text: " — stolica półolbrzymów, miasto portowe; ok. 34 tys. mieszkanców — półolbrzymy, olbrzymy, orki, półorki, krasnoludy, reptilioni;",
    },
    {
      id: "table1_tr5",
      k100: "35-38",
      placeOfBirth: "Gasta",
      text: " — stolica repiillionów, miasto — twierdza; około 34 tys. mieszkańców — reptillioni, krasnoludy, hobbici, gnomy i ludzie;",
    },
    {
      id: "table1_tr6",
      k100: "39-42",
      placeOfBirth: "Olgrion",
      text: " — stolica eltów; ok. 31 tys. mieszkańców — elfy, półelfy;",
    },
    {
      id: "table1_tr7",
      k100: "43-45",
      placeOfBirth: "Tagara Ciemna",
      text: " — jedna ze stolic ludzkich; ok. 29 tys. mieszkańców — ludzie;",
    },
    {
      id: "table1_tr8",
      k100: "46-48",
      placeOfBirth: "Ongir-gar",
      text: " — miasto portowe; ok. 24 tys. mieszkanców — elfy, półelfy, ludzie, półorki, orki;",
    },
    {
      id: "table1_tr9",
      k100: "49-51",
      placeOfBirth: "Aria-gar",
      text: " — ok. 22 tys. mieszkańców — orki, półorki, ludzie, hobbici, gnomy, reptilioni;",
    },
    {
      id: "table1_tr10",
      k100: "52-54",
      placeOfBirth: "Inchra-gar",
      text: " — ok. 21 tys. mieszkańców — orki, półorki, ludzie;",
    },
    {
      id: "table1_tr11",
      k100: "55-56",
      placeOfBirth: "Tagara Szara",
      text: " — jedna ze stolic ludzkich; ok. 19 tys. mieszkańców — ludzie;",
    },
    {
      id: "table1_tr12",
      k100: "57-58",
      placeOfBirth: "Tagara Biała",
      text: " — jedna ze stolic ludzkich; ok. 15,5 tys. mieszkańców — ludzie, krasnoludy;",
    },
    {
      id: "table1_tr13",
      k100: "59-60",
      placeOfBirth: "Ogragar",
      text: " — stolica ogrów, miasto portowe; ok. 13 tys. mieszkańców — ogry, półorki, orki, krasnoludy;",
    },
    {
      id: "table1_tr14",
      k100: "61-80",
      placeOfBirth: "rejony Orcusa oddalone od miast;",
      text: " wiejskie, ew. samotne posiadłości;",
    },
    {
      id: "table1_tr15",
      k100: "81-99",
      placeOfBirth: "wyspy, leżące wokół Orcusa;",
      text: "",
    },
    {
      id: "table1_tr16",
      k100: "00",
      placeOfBirth: "miejsce urodzenia nieznane",
      text: "(postać może pochodzić np. z innego archipelagu, lub też po prostu nie wiedzieć gdzie się urodziła);",
    },
  ];
  return (
    <div>
      <table id="table1_origin_place_of_birth" class="table_origin">
        {chapterPlaceOfBirthInfo.map((chapterPlaceOfBirthInfo) => (
          <tr id={chapterPlaceOfBirthInfo.id}>
            <td className="td__k100">{chapterPlaceOfBirthInfo.k100}</td>
            <td>
              <b>{chapterPlaceOfBirthInfo.placeOfBirth}</b>
              {chapterPlaceOfBirthInfo.text}
            </td>
          </tr>
        ))}
      </table>
      <button id="k100_button_place_of_birth" class="k100_button">
        k100
      </button>{" "}
      <span id="result1"></span>
      <div>
        <div>
          miejsce urodzenia:
          <span id="place_of_birth"></span>
        </div>
        <img id="map" src={kc_logo} alt="map" />
      </div>
    </div>
  );
};

export default ChapterContent_II;
