import MenuListItem from "./MenuListItem.js";

const MenuUnorderedList_Test = (props) => {
  return (
    <ul className="menu__unordered-list">
      <li role="menuitem" className="menu__item">
        <a id="section1" href="#chapter_section1" className="menu__link">
          I. WYBÓR RASY I PŁCI
        </a>
      </li>
      <MenuListItem
        chapterId={"props.chapters_info.id"}
        chapterTitle={"props.chapters_info.title"}
        chapterHref={"props.chapters_info.href"}
        chapterTitle_test={props.chapters_info[1].title}
      />
    </ul>
  );
};

export default MenuUnorderedList_Test;
