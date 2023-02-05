import CharacterSummarySublistItem from "./CharacterSummarySublistItem";

const CharacterSummarySublist = (props) => {
  let test = props.summaryInfo.map((summaryContent) => summaryContent);

  console.log("smm0: " + test);

  return (
    <ul class="unordered-list">
      <li class="menu__item character__summary__item1">
        CharacterSummarySublist <span id="character__summary_birth"> —</span>
      </li>
      {props.summaryInfo.map((summaryContent) => (
        <CharacterSummarySublistItem
          summaryInfo={summaryContent}
        ></CharacterSummarySublistItem>
      ))}
    </ul>
  );
};

export default CharacterSummarySublist;
