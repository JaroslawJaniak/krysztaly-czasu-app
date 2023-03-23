const Subprofession = (props) => {
  return (
    <div className="subprofession" hidden={props.hiddenStat}>
      <input
        type="checkbox"
        id="subprofession.."
        name="subprofession.."
        value="SubProfName"
        className="checkbox__subprofession"
      />
      <label for="subprofession1">{props.children}</label>
    </div>
  );
};

export default Subprofession;
