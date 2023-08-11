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

  const [onGetTable_trId, setonGetTable_trIdState] = useState(
    props.defaultPlcOfBirthTrId
  );

  const getPlaceOfBirth = (placeOfBirth, imgSrc, k100Result, trId) => {
    setonGetPlaceOfBirthState(placeOfBirth);
    setonGetImgSrc(imgSrc);
    setonGetk100Result(k100Result);
    setonGetTable_trIdState(trId);
  };

  props.onGetPlaceOfBirth(onGetPlaceOfBirthState);
  props.onGetPlaceOfBirthImgSrc(onGetImgSrc);
  props.onGetPlaceOfBirthK100Result(onGetk100Result);
  props.onGetPlaceOfBirthTrId(onGetTable_trId);

  return (
    <div>
      <ChapterContent_II_placeOfBirth
        defaultPlcOfBirth={props.defaultPlcOfBirth}
        defaultPlcOfBirthImgSrc={props.defaultPlcOfBirthImgSrc}
        defaultPlcOfBirthK100Result={props.defaultPlcOfBirthK100Result}
        defaultPlcOfBirthTrId={props.defaultPlcOfBirthTrId}
        onGetPlaceOfBirth={getPlaceOfBirth}
      />
      <ChapterContent_II_socialClass />
    </div>
  );
};

export default ChapterContent_II;
