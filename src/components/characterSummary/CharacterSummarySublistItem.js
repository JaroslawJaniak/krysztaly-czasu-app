const CharacterSummarySublistItem = (props) => {
  console.log(props.summaryInfo);

  return (
    <div>
      <li class="menu__item character__summary__item">
        {props.summaryInfo}
        <span> —</span>
      </li>
    </div>
  );
};

export default CharacterSummarySublistItem;
