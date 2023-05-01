import React, { useState } from "react";

import ChapterContent_II_placeOfBirth from "./ChapterContent_II_placeOfBirth";
import ChapterContent_II_socialClass from "./ChapterContent_II_socialClass";

const ChapterContent_II = (props) => {
  const [onGetPlaceOfBirthState, setonGetPlaceOfBirthState] = useState("");

  const getPlaceOfBirth = (item) => {
    setonGetPlaceOfBirthState(item);
  };

  props.onGetPlaceOfBirth(onGetPlaceOfBirthState);

  return (
    <div>
      <ChapterContent_II_placeOfBirth onGetPlaceOfBirth={getPlaceOfBirth} />
      <ChapterContent_II_socialClass />
    </div>
  );
};

export default ChapterContent_II;
