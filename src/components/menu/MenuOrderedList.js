import MenuUnorderedList from "./MenuUnorderedList.js";
import MenuUnorderedList_Test from "./MenuUnorderedList_Test.js";

const MenuOrderedList = (props) => {
  return (
    <ol className="menu__ordered-list">
      <MenuUnorderedList
        chapters_info={props.chapters_info}
      ></MenuUnorderedList>
      <MenuUnorderedList_Test chapters_info={props.chapters_info} />
    </ol>
  );
};

export default MenuOrderedList;
