import ListItem from "./List_item.js";
import MenuListItem from "./MenuListItem.js";

const MenuUnorderedList = (props) => {
  return (
    <ul className="menu__unordered-list">
      <MenuListItem
        sectionId={props.sections[0].id}
        sectionTitle={props.sections[0].title}
        sectionHref={props.sections[0].anchor}
      />
      <MenuListItem
        sectionId={props.sections[1].id}
        sectionTitle={props.sections[1].title}
        sectionHref={props.sections[1].anchor}
      >
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
      </MenuListItem>

      <MenuListItem
        sectionId={props.sections[2].id}
        sectionTitle={props.sections[2].title}
        sectionHref={props.sections[2].anchor}
      />
      <MenuListItem
        sectionId={props.sections[3].id}
        sectionTitle={props.sections[3].title}
        sectionHref={props.sections[3].anchor}
      >
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
      </MenuListItem>
      <MenuListItem
        sectionId={props.sections[4].id}
        sectionTitle={props.sections[4].title}
        sectionHref={props.sections[4].anchor}
      />
      <MenuListItem
        sectionId={props.sections[5].id}
        sectionTitle={props.sections[5].title}
        sectionHref={props.sections[5].anchor}
      />
    </ul>
  );
};

export default MenuUnorderedList;
