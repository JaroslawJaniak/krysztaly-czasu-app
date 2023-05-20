import Subprofession from "./Subprofession";

const CastSubprofession_container = (props) => {
  return (
    <div className="subprofession_container cast1">
      {props.Item1.map((stat, indexStat) => (
        <Subprofession
          indexOfArray={props.index1}
          indexStat2={indexStat}
          hiddenStat={stat}
          professions={props.Item2}
        >
          {props.Item2[props.index1][indexStat]}
        </Subprofession>
      ))}
    </div>
  );
};

export default CastSubprofession_container;
