import "./Menu.css";
import "./Lists.css";
import MenuCloseButton from "./MenuCloseButton.js";
import MenuOpenButton from "./MenuOpenButton.js";
import MenuOrderedList from "./MenuOrderedList.js";

const Menu = (props) => {
  return (
    <nav className="menu">
      <MenuOpenButton></MenuOpenButton>

      <div id="menu__overlay" className="menu__overlay  menu" role="menu">
        <MenuCloseButton></MenuCloseButton>

        <div className="overlay-content">
          <MenuOrderedList
            chapters_info={props.chapters_info}
          ></MenuOrderedList>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
