import ListItem from "./List_item.js";
import MenuListItem from "./MenuListItem.js";
import MenuUnorderedSublist from "./MenuUnorderedSublist.js";

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
        <MenuUnorderedSublist
          subchaptersInfo={props.chapters_info[1].subchaptersInfo}
          subchaptersLength={props.chapters_info[1].subchaptersInfo.length}
        />
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
        <MenuUnorderedSublist
          subchaptersInfo={props.chapters_info[3].subchaptersInfo}
          subchaptersLength={props.chapters_info[3].subchaptersInfo.length}
        />
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
