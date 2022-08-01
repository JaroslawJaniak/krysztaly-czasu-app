import "./Menu.css";
import "./Lists.css";
import MenuCloseButton from "./Menu__closeButton.js";
import MenuOpenButton from "./Menu__openButton.js";
import MenuOrderedList from "./Menu__ordered-list.js";

const Menu = () => {
  return (
    <nav className="menu">
      <MenuOpenButton></MenuOpenButton>

      <div id="menu__overlay" className="menu__overlay  menu" role="menu">
        <MenuCloseButton></MenuCloseButton>

        <div className="overlay-content">
          <MenuOrderedList></MenuOrderedList>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
