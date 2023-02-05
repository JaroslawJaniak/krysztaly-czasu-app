import "./CharacterSummary.css";
import "../menu/Lists.css";
import CharacterSummaryListItem from "./CharacterSummaryListItem";
import CharacterSummarySublist from "./CharacterSummarySublist";

const CharacterSummary = (props) => {
  return (
    <div class="character__summary">
      <ol class="character__summary_list ordered-list">
        <li class="character__summary__item">
          <span class="character__summary_name">(Imię Postaci)</span>
          <ul class="unordered-list">
            {props.chapters_info.map((chapters) => (
              <CharacterSummaryListItem
                key={chapters.id}
                chapterId={chapters.id}
                chapterTitle={chapters.title}
              >
                <CharacterSummarySublist
                  summaryInfo={chapters.summaryContent}
                ></CharacterSummarySublist>
              </CharacterSummaryListItem>
            ))}
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default CharacterSummary;
