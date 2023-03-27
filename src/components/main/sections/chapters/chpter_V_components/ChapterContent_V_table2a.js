const ChapterContent_V_table2a = (props) => {
  const tableInfo = {
    tableTitle: "V.a Tabela WZROST, WAGA I WIEK, mężczyzna",
    text1: "RASA",
    text2: "WZROST",
    text3: "WAGA",
    text4: "WIEK DOJRZAŁOŚCI",
    text5: "min.",
    text6: "średni",
    text7: "max.",
    text8: "-",
  };

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

        {props.item.map((tableContent, index) => (
          <tr key={tableContent.id + index} className="tr_height_weight">
            <td>{tableContent.race}</td>
            <td>{tableContent.heightMin}</td>
            <td>
              {tableContent.heightAvr + "-" + (tableContent.heightAvr + 10)}
            </td>
            <td>{tableContent.heightMax}</td>
            <td>{tableContent.weightMin}</td>
            <td>
              {tableContent.weightAvr + "-" + (tableContent.weightAvr + 10)}
            </td>
            <td>{tableContent.weightMax}</td>
            <td>{tableContent.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ChapterContent_V_table2a;
