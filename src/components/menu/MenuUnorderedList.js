import ListItem from "./List_item.js";
import MenuListItem from "./MenuListItem.js";

const MenuUnorderedList = (props) => {
  return (
    <ul className="menu__unordered-list">
      <MenuListItem
        chapterId={props.chapters_info[0].id}
        chapterTitle={props.chapters_info[0].title}
        chapterHref={props.chapters_info[0].anchor}
      />
      <MenuListItem
        chapterId={props.chapters_info[1].id}
        chapterTitle={props.chapters_info[1].title}
        chapterHref={props.chapters_info[1].anchor}
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
        chapterId={props.chapters_info[2].id}
        chapterTitle={props.chapters_info[2].title}
        chapterHref={props.chapters_info[2].anchor}
      />
      <MenuListItem
        chapterId={props.chapters_info[3].id}
        chapterTitle={props.chapters_info[3].title}
        chapterHref={props.chapters_info[3].anchor}
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
        chapterId={props.chapters_info[4].id}
        chapterTitle={props.chapters_info[4].title}
        chapterHref={props.chapters_info[4].anchor}
      />
      <MenuListItem
        chapterId={props.chapters_info[5].id}
        chapterTitle={props.chapters_info[5].title}
        chapterHref={props.chapters_info[5].anchor}
      />
    </ul>
  );
};

export default MenuUnorderedList;
