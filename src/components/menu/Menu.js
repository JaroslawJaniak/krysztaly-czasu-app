import "./Menu.css";
import "./Lists.css";
import MenuCloseButton from "./MenuCloseButton.js";
import MenuOpenButton from "./MenuOpenButton.js";
import MenuOrderedList from "./MenuOrderedList.js";

const Menu = (props) => {
  const SECTIONS = [
    {
      id: "s1",
      title: "I. WYBÓR RASY I PŁCI",
      anchor: "#chapter_section1",
    },
    {
      id: "s2",
      title: "II. LOSOWANIE POCHODZENIA",
      anchor: "#chapter_section2",
    },
    {
      id: "s3",
      title: "III. LOSOWANIE UŁOMNOŚCI I ZDLONOŚCI NADNATURALNYCH",
      anchor: "#chapter_section3",
    },
    {
      id: "s4",
      title: "IV. WYBÓR PROFESJI",
      anchor: "#chapter_section4",
    },
    {
      id: "s5",
      title: "V. LOSOWANIE WZROSTU I WAGI",
      anchor: "#chapter_section5",
    },
    {
      id: "s6",
      title: "VI. LOSOWANIE WSPÓŁCZYNNIKÓW PODSTAWOWYCH",
      anchor: "#chapter_section6",
    },
  ];

  return (
    <nav className="menu">
      <MenuOpenButton></MenuOpenButton>

      <div id="menu__overlay" className="menu__overlay  menu" role="menu">
        <MenuCloseButton></MenuCloseButton>

        <div className="overlay-content">
          <MenuOrderedList sections={SECTIONS}></MenuOrderedList>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
