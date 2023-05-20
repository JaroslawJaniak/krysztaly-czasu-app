const dataSocialClass = (k100buttonResult) => {
  let socialClass = {
    sclClassName: "WKW;",
    sclClassBenefice: 0,
    table_trId: "",
  };

  if (k100buttonResult >= 1 && k100buttonResult < 17) {
    placeOfBirth.plcBirth = "Ostrogar;";
    placeOfBirth.srcImage = "images/map" + 1 + ".jpg";
    placeOfBirth.table_trId = 1;
  } else if (k100buttonResult >= 17 && k100buttonResult < 26) {
    placeOfBirth.plcBirth = "Get-warr-gar;";
    placeOfBirth.srcImage = "images/map" + 2 + ".jpg";
    placeOfBirth.table_trId = 2;
  } else if (k100buttonResult >= 26 && k100buttonResult < 31) {
    placeOfBirth.plcBirth = "Ranhar-gar;";
    placeOfBirth.srcImage = "images/map" + 3 + ".jpg";
    placeOfBirth.table_trId = 3;
  } else if (k100buttonResult >= 31 && k100buttonResult < 35) {
    placeOfBirth.plcBirth = "Ora-gar;";
    placeOfBirth.srcImage = "images/map" + 4 + ".jpg";
    placeOfBirth.table_trId = 4;
  } else if (k100buttonResult >= 35 && k100buttonResult < 39) {
    placeOfBirth.plcBirth = "Gasta;";
    placeOfBirth.srcImage = "images/map" + 5 + ".jpg";
    placeOfBirth.table_trId = 5;
  } else if (k100buttonResult >= 39 && k100buttonResult < 43) {
    placeOfBirth.plcBirth = "Olgrion;";
    placeOfBirth.srcImage = "images/map" + 6 + ".jpg";
    placeOfBirth.table_trId = 6;
  } else if (k100buttonResult >= 43 && k100buttonResult < 46) {
    placeOfBirth.plcBirth = "Tagara Ciemna;";
    placeOfBirth.srcImage = "images/map" + 7 + "c.jpg";
    placeOfBirth.table_trId = 7;
  } else if (k100buttonResult >= 46 && k100buttonResult < 49) {
    placeOfBirth.plcBirth = "Ongir-gar;";
    placeOfBirth.srcImage = "images/map" + 8 + ".jpg";
    placeOfBirth.table_trId = 8;
  } else if (k100buttonResult >= 49 && k100buttonResult < 52) {
    placeOfBirth.plcBirth = "Aria-gar;";
    placeOfBirth.srcImage = "images/map" + 9 + ".jpg";
    placeOfBirth.table_trId = 9;
  } else if (k100buttonResult >= 52 && k100buttonResult < 55) {
    placeOfBirth.plcBirth = "Inchra-gar;";
    placeOfBirth.srcImage = "images/map" + 10 + ".jpg";
    placeOfBirth.table_trId = 10;
  } else if (k100buttonResult >= 55 && k100buttonResult < 57) {
    placeOfBirth.plcBirth = "Tagara Szara;";
    placeOfBirth.srcImage = "images/map" + 7 + "b.jpg";
    placeOfBirth.table_trId = 11;
  } else if (k100buttonResult >= 57 && k100buttonResult < 59) {
    placeOfBirth.plcBirth = "Tagara Biała;";
    placeOfBirth.srcImage = "images/map" + 7 + "a.jpg";
    placeOfBirth.table_trId = 12;
  } else if (k100buttonResult >= 59 && k100buttonResult < 61) {
    placeOfBirth.plcBirth = "Ogragar;";
    placeOfBirth.srcImage = "images/map" + 11 + ".jpg";
    placeOfBirth.table_trId = 13;
  } else if (k100buttonResult >= 61 && k100buttonResult < 81) {
    placeOfBirth.plcBirth = "rejony Orcusa oddalone od miast;";
    placeOfBirth.srcImage = "images/map" + 12 + ".jpg";
    placeOfBirth.table_trId = 14;
  } else if (k100buttonResult >= 81 && k100buttonResult < 100) {
    placeOfBirth.plcBirth = "wyspy, leżące wokół Orcusa;";
    placeOfBirth.srcImage = "images/map" + 13 + ".jpg";
    placeOfBirth.table_trId = 15;
  } else if (k100buttonResult === 100) {
    placeOfBirth.plcBirth = "miejsce urodzenia nieznane;";
    placeOfBirth.srcImage = "images/map" + 14 + ".jpg";
    placeOfBirth.table_trId = 16;
  }

  return socialClass;
};

export default dataSocialClass;
