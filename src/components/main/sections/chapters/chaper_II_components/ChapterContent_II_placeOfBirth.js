import mapImage from "../../../../../images/map0.jpg";
import chp2_info1 from "./chp2_info1";
import chp2_place_of_birth from "./chp2_table-place-of-birth";

const ChapterContent_II_placeOfBirth = (props) => {
  return (
    <section
      id="chapter_section2__place_of_birth"
      className="section2__place_of_birth"
    >
      <h3>{chp2_info1.title}</h3>
      <p>{chp2_info1.tableLabel}</p>
      <table id="table1_origin_place_of_birth" className="table_origin">
        {chp2_place_of_birth.map((chp2_place_of_birth) => (
          <tr id={chp2_place_of_birth.id}>
            <td className="td__k100">{chp2_place_of_birth.k100}</td>
            <td>
              <b>{chp2_place_of_birth.placeOfBirth}</b>
              {chp2_place_of_birth.text}
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
        <img id="map" src={mapImage} alt="map" className="mapImage" />
      </div>
    </section>
  );
};

export default ChapterContent_II_placeOfBirth;
