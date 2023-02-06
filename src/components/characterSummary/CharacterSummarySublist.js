import CharacterSummarySublistItem from "./CharacterSummarySublistItem";

const CharacterSummarySublist = (props) => {
  let test = props.summaryInfo.map((summaryContent) => summaryContent);

  return (
    <ul class="unordered-list">
      {props.summaryInfo.map((summaryContent) => (
        <CharacterSummarySublistItem
          summaryInfo={summaryContent}
        ></CharacterSummarySublistItem>
      ))}
    </ul>
  );
};

export default CharacterSummarySublist;
