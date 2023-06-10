import React, { useState } from "react";

import ChapterContent_II_placeOfBirth from "./ChapterContent_II_placeOfBirth";
import ChapterContent_II_socialClass from "./ChapterContent_II_socialClass";

const ChapterContent_II = (props) => {
  const [onGetPlaceOfBirthState, setonGetPlaceOfBirthState] = useState(
    props.defaultPlcOfBirth
  );
  const [onGetImgSrc, setonGetImgSrc] = useState(props.defaultPlcOfBirthImgSrc);
  const [onGetk100Result, setonGetk100Result] = useState(
    props.defaultPlcOfBirthK100Result
  );

  const getPlaceOfBirth = (placeOfBirth, imgSrc, k100Result, trId) => {
    setonGetPlaceOfBirthState(placeOfBirth);
    setonGetImgSrc(imgSrc);
    setonGetk100Result(k100Result);
  };

  props.onGetPlaceOfBirth(onGetPlaceOfBirthState);
  props.onGetPlaceOfBirthImgSrc(onGetImgSrc);
  props.onGetPlaceOfBirthK100Result(onGetk100Result);

  return (
    <div>
      <ChapterContent_II_placeOfBirth
        defaultPlcOfBirth={props.defaultPlcOfBirth}
        defaultPlcOfBirthImgSrc={props.defaultPlcOfBirthImgSrc}
        defaultPlcOfBirthK100Result={props.defaultPlcOfBirthK100Result}
        onGetPlaceOfBirth={getPlaceOfBirth}
      />
      <ChapterContent_II_socialClass />
    </div>
  );
};

export default ChapterContent_II;
