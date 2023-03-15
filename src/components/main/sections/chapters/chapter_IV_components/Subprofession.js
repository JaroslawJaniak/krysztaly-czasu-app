const Subprofession = (props) => {
  return (
    <div className="subprofession">
      <input
        type="checkbox"
        id="subprofession.."
        name="subprofession.."
        value="SubProfName"
        className="checkbox__subprofession"
      />
      <label for="subprofession1">{props.profession}</label>
    </div>
  );
};

export default Subprofession;
