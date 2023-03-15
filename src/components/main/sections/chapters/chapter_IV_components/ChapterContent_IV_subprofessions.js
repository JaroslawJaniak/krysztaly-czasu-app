const ChapterContent_IV_subprofessions = (props) => {
  let test = props.items[0].castHiddenStatus;
  //console.log(test);

  return;
};

export default ChapterContent_IV_subprofessions;

/*
<div>
          {items.professions.map((profession) => (
            <div hidden={items.castHiddenStatus}>
              <input
                type="checkbox"
                id="subprofession_"
                name="subprofession_"
                value="Wojownik"
                class="checkbox__subprofession"
              />
              <label for="subprofession1">{profession}</label>
            </div>
          ))}
          <br />
        </div>



        <div className="subprofession_container">
      {props.items.map((items) => (
        <div>
          {items.professions.map((profession) => (
            <div hidden={items.castHiddenStatus[index]}>
              {console.log("cer:" + items.castHiddenStatus[0])}
              <input
                type="checkbox"
                id="subprofession_"
                name="subprofession_"
                value="Wojownik"
                class="checkbox__subprofession"
              />
              <label for="subprofession1">{profession}</label>
            </div>
          ))}
          <br />
        </div>
      ))}
    </div>

*/
