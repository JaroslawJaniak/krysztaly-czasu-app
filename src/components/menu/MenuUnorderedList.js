import ListItem from "./List_item.js";

const MenuUnorderedList = () => {
  return (
    <ul className="menu__unordered-list">
      <li role="menuitem" className="menu__item">
        <a id="section1" href="#chapter_section1" className="menu__link">
          I. WYBÓR RASY I PŁCI
        </a>
      </li>
      <li role="menuitem" className="menu__item">
        <a id="section2" href="#chapter_section2" className="menu__link">
          II. LOSOWANIE POCHODZENIA
        </a>
        <ul id="ul_section2" className="menu__unordered-list sublist">
          <li role="menuitem" className="menu__item">
            <a href="#chapter_section2__place_of_birth" className="menu__link">
              Losowanie miejsca urodzenia
            </a>
          </li>
          <li role="menuitem" className="menu__item">
            <a
              href="#chapter_section2__social_className"
              className="menu__link"
            >
              Losowanie pochodzenia społecznego
            </a>
          </li>
        </ul>
      </li>
      <li role="menuitem" className="menu__item">
        <a id="section3" href="#chapter_section3" className="menu__link">
          III. LOSOWANIE UŁOMNOŚCI I ZDLONOŚCI NADNATURALNYCH
        </a>
      </li>
      <li role="menuitem" className="menu__item">
        <a id="section4" href="#chapter_section4" className="menu__link">
          IV. WYBÓR PROFESJI
        </a>
        <ul id="ul_section4" className="menu__unordered-list sublist">
          <li role="menuitem" className="menu__item">
            <a href="#profession_cast1" className="menu__link">
              Kasta żołnierska
            </a>
          </li>
          <li role="menuitem" className="menu__item">
            <a href="#profession_cast2" className="menu__link">
              Kasta rycerska
            </a>
          </li>
          <li role="menuitem" className="menu__item">
            <a href="#profession_cast3" className="menu__link">
              Kasta złodziejska
            </a>
          </li>
          <li role="menuitem" className="menu__item">
            <a href="#profession_cast4" className="menu__link">
              Kasta kleryczna
            </a>
          </li>
          <li role="menuitem" className="menu__item">
            <a href="#profession_cast5" className="menu__link">
              Kasta czarodziejska
            </a>
          </li>
        </ul>
      </li>
      <li role="menuitem" className="menu__item">
        <a id="section5" href="#chapter_section5" className="menu__link">
          V. LOSOWANIE WZROSTU I WAGI
        </a>
      </li>
      <ListItem className="menu__item">
        <a id="section6" href="#chapter_section6" className="menu__link">
          VI. LOSOWANIE WSPÓŁCZYNNIKÓW PODSTAWOWYCH
        </a>
      </ListItem>
    </ul>
  );
};

export default MenuUnorderedList;
