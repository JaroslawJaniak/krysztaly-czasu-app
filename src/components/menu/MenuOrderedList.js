import MenuUnorderedList from "./MenuUnorderedList.js";
import MenuUnorderedList_Test from "./MenuUnorderedList_Test.js";

const MenuOrderedList = (props) => {
  console.log("00." + props);
  console.log("01." + props.sections[0].title);

  return (
    <ol className="menu__ordered-list">
      <MenuUnorderedList sections={props.sections}></MenuUnorderedList>
      <MenuUnorderedList_Test sections={props.sections} />
    </ol>
  );
};

export default MenuOrderedList;
