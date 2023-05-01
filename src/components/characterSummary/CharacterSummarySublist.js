import CharacterSummarySublistItem from "./CharacterSummarySublistItem";

const CharacterSummarySublist = (props) => {
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
