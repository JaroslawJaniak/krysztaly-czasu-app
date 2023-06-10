const dataSocialClass = (k100buttonResult) => {
  let socialClass = {
    socialClass: "",
    sclClassBenefice: 0,
    table_trId: "",
    n: 0,
    k: 0,
    bonusStat: 0,
  };

  if (k100buttonResult >= 1 && k100buttonResult < 6) {
    socialClass.socialClass.sclClassName = "NKN;";
    socialClass.table_trId = 1;
    socialClass.n = 1;
    socialClass.k = 10;
    socialClass.bonusStat = -15;
  } else if (k100buttonResult >= 6 && k100buttonResult < 11) {
    socialClass.sclClassName = "ŚKN;";
    socialClass.table_trId = 2;
    socialClass.n = 2;
    socialClass.k = 10;
    socialClass.bonusStat = -10;
  } else if (k100buttonResult >= 11 && k100buttonResult < 16) {
    socialClass.sclClassName = "WKN;";
    socialClass.table_trId = 3;
    socialClass.n = 5;
    socialClass.k = 10;
    socialClass.bonusStat = -5;
  } else if (k100buttonResult >= 16 && k100buttonResult < 36) {
    socialClass.sclClassName = "NKŚ;";
    socialClass.table_trId = 4;
    socialClass.n = 1;
    socialClass.k = 50;
  } else if (k100buttonResult >= 36 && k100buttonResult < 56) {
    socialClass.sclClassName = "ŚKŚ;";
    socialClass.table_trId = 5;
    socialClass.n = 1;
    socialClass.k = 100;
  } else if (k100buttonResult >= 56 && k100buttonResult < 76) {
    socialClass.sclClassName = "WKŚ;";
    socialClass.table_trId = 6;
    socialClass.n = 2;
    socialClass.k = 100;
  } else if (k100buttonResult >= 76 && k100buttonResult < 86) {
    socialClass.sclClassName = "NKW;";
    socialClass.table_trId = 7;
    socialClass.n = 1;
    socialClass.k = 100;
    socialClass.bonusStat = 5;
  } else if (k100buttonResult >= 86 && k100buttonResult < 91) {
    socialClass.sclClassName = "ŚKW;";
    socialClass.table_trId = 8;
    socialClass.n = 2;
    socialClass.k = 100;
    socialClass.bonusStat = 10;
  } else if (k100buttonResult >= 91 && k100buttonResult < 96) {
    socialClass.sclClassName = "WKW;";
    socialClass.table_trId = 9;
    socialClass.n = 5;
    socialClass.k = 100;
    socialClass.bonusStat = 15;
  } else if (k100buttonResult >= 96 && k100buttonResult <= 100) {
    socialClass.sclClassName = "EW;";
    socialClass.table_trId = 10;
    socialClass.n = 10;
    socialClass.k = 100;
    socialClass.bonusStat = 20;
  }

  return socialClass;
};

export default dataSocialClass;
