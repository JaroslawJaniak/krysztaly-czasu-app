import ListItem from "./List_item.js";
import MenuListItem from "./MenuListItem.js";

const MenuUnorderedList_Test = (props) => {
  console.log("1s. " + props.sections[0].id);
  console.log("2s. " + props.sections[0].title);
  console.log("3s. " + props.sections[0].anchor);

  return (
    <ul className="menu__unordered-list">
      <li role="menuitem" className="menu__item">
        <a id="section1" href="#chapter_section1" className="menu__link">
          I. WYBÓR RASY I PŁCI
        </a>
      </li>
      <MenuListItem
        sectionId={"props.sections.id"}
        sectionTitle={"props.sections.title"}
        sectionHref={"props.sections.href"}
        sectionTitle_test={props.sections[0].title}
      />
    </ul>
  );
};

export default MenuUnorderedList_Test;
