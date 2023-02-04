import React from "react";

const MenuListItem = (props) => {
  return (
    <li role="menuitem" className="menu__item">
      <a id={props.chapterId} href={props.chapterHref} className="menu__link">
        {props.chapterTitle}
        {props.chapterTitle_test}
      </a>
      {props.children}
    </li>
  );
};

export default MenuListItem;
