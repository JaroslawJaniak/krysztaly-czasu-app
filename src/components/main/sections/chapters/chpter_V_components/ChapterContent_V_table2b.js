const ChapterContent_V_table2b = (props) => {
  const tableInfo = {
    tableTitle: "V.a Tabela WZROST, WAGA I WIEK, kobieta",
    text1: "RASA",
    text2: "WZROST",
    text3: "WAGA",
    text4: "WIEK DOJRZAŁOŚCI",
    text5: "min.",
    text6: "średni",
    text7: "max.",
    text8: "-",
  };

  const defaultView = props.item.map((tableContent, index) => (
    <tr key={tableContent.id + index} className="tr_height_weight">
      <td>{tableContent.race}</td>
      <td>{tableContent.heightMin - 10}</td>
      <td>{tableContent.heightAvr - 10 + "-" + tableContent.heightAvr}</td>
      <td>{tableContent.heightMax - 10}</td>
      <td>{tableContent.weightMin - 10}</td>
      <td>{tableContent.weightAvr + "-" + tableContent.weightAvr}</td>
      <td>{tableContent.weightMax - 10}</td>
      <td>{tableContent.age}</td>
    </tr>
  ));

  defaultView[3] = (
    <tr key={props.item[3].id + 3} className="tr_height_weight">
      <td>{props.item[3].race}</td>
      <td>{props.item[3].heightMin + 10}</td>
      <td>
        {props.item[3].heightAvr + 10 + "-" + (props.item[3].heightAvr + 20)}
      </td>
      <td>{props.item[3].heightMax + 10}</td>
      <td>{props.item[3].weightMin + 10}</td>
      <td>
        {props.item[3].weightAvr + 10 + "-" + (props.item[3].weightAvr + 20)}
      </td>
      <td>{props.item[3].weightMax + 10}</td>
      <td>{props.item[3].age}</td>
    </tr>
  );

  return (
    <div>
      <p id="paragraph_height_weight_female">{tableInfo.tableTitle}</p>

      <table
        hidden={false}
        id="table1_height_weight_male"
        className="table_height_weight"
      >
        <tr id="table1_tr1" class="tr_height_weight">
          <td className="td__race">{tableInfo.text1}</td>

          <td className="td_height"></td>
          <td className="td_height">{tableInfo.text2}</td>
          <td className="td_height"></td>

          <td className="td_weight"></td>
          <td className="td_weight">{tableInfo.text3}</td>
          <td className="td_weight"></td>

          <td>{tableInfo.text4}</td>
        </tr>
        <tr className="tr_height_weight">
          <td>{tableInfo.text8}</td>
          <td>{tableInfo.text5}</td>
          <td>{tableInfo.text6}</td>
          <td>{tableInfo.text7}</td>
          <td>{tableInfo.text5}</td>
          <td>{tableInfo.text6}</td>
          <td>{tableInfo.text7}</td>
          <td>{tableInfo.text8}</td>
        </tr>

        {defaultView}
      </table>
    </div>
  );
};

export default ChapterContent_V_table2b;
