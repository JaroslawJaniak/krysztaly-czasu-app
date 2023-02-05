import MenuListItem from "./MenuListItem.js";
import MenuUnorderedSublist from "./MenuUnorderedSublist.js";

const MenuUnorderedList = (props) => {
  let chaptersInfo = props.chapters_info.map((chapters) => chapters);

  console.log("ch0: " + chaptersInfo);
  console.log("ch1: " + chaptersInfo[2].subchaptersInfo);

  return (
    <div>
      <ul className="menu__unordered-list">
        {props.chapters_info.map((chapters) => (
          <MenuListItem
            key={chapters.id}
            chapterId={chapters.id}
            chapterTitle={chapters.title}
            chapterHref={chapters.anchor}
          >
            <MenuUnorderedSublist subchaptersInfo={chapters.subchaptersInfo} />
          </MenuListItem>
        ))}
      </ul>
    </div>
  );
};

export default MenuUnorderedList;
