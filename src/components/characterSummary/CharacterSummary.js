import "./CharacterSummary.css";
import "../menu/Lists.css";

const CharacterSummary = () => {
  return (
    <div class="character__summary">
      <ol class="character__summary_list ordered-list">
        <li class="character__summary__item">
          <span class="character__summary_name">(Imię Postaci)</span>
          <ul class="unordered-list">
            <li class="menu__item" id="character__summary_chapter_section1">
              I. WYBÓR RASY I PŁCI
              <ul class="menu__unordered-list">
                <li class="menu__item character__summary__item1">
                  Płeć: <span id="character__summary_gender"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  Rasa: <span id="character__summary_race"> —</span>
                </li>
              </ul>
            </li>
            <li class="menu__item" id="character__summary_chapter_section2">
              II. LOSOWANIE POCHODZENIA
              <ul class="unordered-list">
                <li class="menu__item character__summary__item1">
                  Miejsce urodzenia:{" "}
                  <span id="character__summary_birth"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  Wyjściowa klasa społeczna:{" "}
                  <span id="character__summary_social"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  Roczny dochód:{" "}
                  <span id="character__summary_social_benefice">0</span> złt
                </li>
              </ul>
            </li>
            <li class="menu__item" id="character__summary_chapter_section3">
              III. LOSOWANIE UŁOMNOŚCI I ZDOLNOŚCI NADNATURALNYCH
              <ul class="menu__unordered-list">
                <li class="menu__item character__summary__item1">
                  Ułomność: <span id="character__summary_disability1"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  Zdolność nadnaturalna:{" "}
                  <span id="character__summary_abieliety1"> —</span>
                </li>
              </ul>
            </li>
            <li class="menu__item" id="character__summary_chapter_section4">
              IV. WYBÓR PROFESJI
              <ul class="menu__unordered-list">
                <li class="menu__item character__summary__item1">
                  Profesja: <span id="character__summary_profession1"> —</span>
                  <span id="character__summary_profession2"></span>
                </li>
              </ul>
            </li>
            <li class="menu__item" id="character__summary_chapter_section5">
              V. LOSOWANIE WZROSTU I WAGI
              <ul class="menu__unordered-list">
                <li class="menu__item character__summary__item1">
                  Wzrost: <span id="character__summary_height"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  Waga: <span id="character__summary_weight"> —</span>
                </li>
              </ul>
            </li>
            <li class="menu__item" id="character__summary_chapter_section6">
              VI. LOSOWANIE WSPÓŁCZYNNIKÓW PODSTAWOWYCH
              <ul class="menu__unordered-list">
                <li class="menu__item character__summary__item1">
                  ŻYW: <span id="character__summary_"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  SF: <span id="character__summary_"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  ZR: <span id="character__summary_"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  SZ: <span id="character__summary_"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  INT: <span id="character__summary_"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  MD: <span id="character__summary_"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  UM: <span id="character__summary_"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  CH: <span id="character__summary_"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  PR: <span id="character__summary_"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  WI: <span id="character__summary_"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  ZW: <span id="character__summary_"> —</span>
                </li>
                <li class="menu__item character__summary__item1">
                  O/W: <span id="character__summary_"> —</span>
                </li>
              </ul>
            </li>
            <li class="character__summary__item"></li>
            <li class="character__summary__item"></li>
            <li role="menuitem" class="menu__item"></li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default CharacterSummary;
