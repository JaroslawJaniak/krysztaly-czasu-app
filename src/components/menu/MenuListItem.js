import React from "react";

const MenuListItem = (props) => {
  return (
    <li role="menuitem" className="menu__item">
      <a id={props.sectionId} href={props.sectionHref} className="menu__link">
        {props.sectionTitle}
        {props.sectionTitle_test}
      </a>
      {props.children}
    </li>
  );
};

export default MenuListItem;
