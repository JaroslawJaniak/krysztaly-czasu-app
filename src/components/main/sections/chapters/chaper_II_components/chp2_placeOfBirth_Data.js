import imageMap1 from "../../../../../images/map1.jpg";
import imageMap2 from "../../../../../images/map2.jpg";
import imageMap3 from "../../../../../images/map3.jpg";
import imageMap4 from "../../../../../images/map4.jpg";
import imageMap5 from "../../../../../images/map5.jpg";
import imageMap6 from "../../../../../images/map6.jpg";
import imageMap7 from "../../../../../images/map7.jpg";
import imageMap8 from "../../../../../images/map8.jpg";
import imageMap9 from "../../../../../images/map9.jpg";
import imageMap10 from "../../../../../images/map10.jpg";
import imageMap11 from "../../../../../images/map11.jpg";
import imageMap12 from "../../../../../images/map12.jpg";
import imageMap13 from "../../../../../images/map13.jpg";
import imageMap14 from "../../../../../images/map14.jpg";

const dataPlaceOfBirth = (k100buttonResult) => {
  let placeOfBirth = {
    srcImage: "",
    plcBirth: "",
    table_trId: "",
  };

  if (k100buttonResult >= 1 && k100buttonResult < 17) {
    placeOfBirth.plcBirth = "Ostrogar;";
    placeOfBirth.srcImage = imageMap1;
    placeOfBirth.table_trId = 1;
  } else if (k100buttonResult >= 17 && k100buttonResult < 26) {
    placeOfBirth.plcBirth = "Get-warr-gar;";
    placeOfBirth.srcImage = imageMap2;
    placeOfBirth.table_trId = 2;
  } else if (k100buttonResult >= 26 && k100buttonResult < 31) {
    placeOfBirth.plcBirth = "Ranhar-gar;";
    placeOfBirth.srcImage = imageMap3;
    placeOfBirth.table_trId = 3;
  } else if (k100buttonResult >= 31 && k100buttonResult < 35) {
    placeOfBirth.plcBirth = "Ora-gar;";
    placeOfBirth.srcImage = imageMap4;
    placeOfBirth.table_trId = 4;
  } else if (k100buttonResult >= 35 && k100buttonResult < 39) {
    placeOfBirth.plcBirth = "Gasta;";
    placeOfBirth.srcImage = imageMap5;
    placeOfBirth.table_trId = 5;
  } else if (k100buttonResult >= 39 && k100buttonResult < 43) {
    placeOfBirth.plcBirth = "Olgrion;";
    placeOfBirth.srcImage = imageMap6;
    placeOfBirth.table_trId = 6;
  } else if (k100buttonResult >= 43 && k100buttonResult < 46) {
    placeOfBirth.plcBirth = "Tagara Ciemna;";
    placeOfBirth.srcImage = imageMap7;
    placeOfBirth.table_trId = 7;
  } else if (k100buttonResult >= 46 && k100buttonResult < 49) {
    placeOfBirth.plcBirth = "Ongir-gar;";
    placeOfBirth.srcImage = imageMap8;
    placeOfBirth.table_trId = 8;
  } else if (k100buttonResult >= 49 && k100buttonResult < 52) {
    placeOfBirth.plcBirth = "Aria-gar;";
    placeOfBirth.srcImage = imageMap9;
    placeOfBirth.table_trId = 9;
  } else if (k100buttonResult >= 52 && k100buttonResult < 55) {
    placeOfBirth.plcBirth = "Inchra-gar;";
    placeOfBirth.srcImage = imageMap10;
    placeOfBirth.table_trId = 10;
  } else if (k100buttonResult >= 55 && k100buttonResult < 57) {
    placeOfBirth.plcBirth = "Tagara Szara;";
    placeOfBirth.srcImage = imageMap7;
    placeOfBirth.table_trId = 11;
  } else if (k100buttonResult >= 57 && k100buttonResult < 59) {
    placeOfBirth.plcBirth = "Tagara Biała;";
    placeOfBirth.srcImage = imageMap7;
    placeOfBirth.table_trId = 12;
  } else if (k100buttonResult >= 59 && k100buttonResult < 61) {
    placeOfBirth.plcBirth = "Ogragar;";
    placeOfBirth.srcImage = imageMap11;
    placeOfBirth.table_trId = 13;
  } else if (k100buttonResult >= 61 && k100buttonResult < 81) {
    placeOfBirth.plcBirth = "rejony Orcusa oddalone od miast;";
    placeOfBirth.srcImage = imageMap12;
    placeOfBirth.table_trId = 14;
  } else if (k100buttonResult >= 81 && k100buttonResult < 100) {
    placeOfBirth.plcBirth = "wyspy, leżące wokół Orcusa;";
    placeOfBirth.srcImage = imageMap13;
    placeOfBirth.table_trId = 15;
  } else if (k100buttonResult === 100) {
    placeOfBirth.plcBirth = "miejsce urodzenia nieznane;";
    placeOfBirth.srcImage = imageMap14;
    placeOfBirth.table_trId = 16;
  }

  return placeOfBirth;
};

export default dataPlaceOfBirth;
