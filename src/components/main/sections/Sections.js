const Sections = (props) => {
  return (
    <div>
      {props.chapters_info.map((chapter) => (
        <section key={chapter.id} id={chapter.id} className="">
          <br />
          <h3 className="stylized">{chapter.title}</h3>
          <div className="content">{chapter.chapterContent}</div>
        </section>
      ))}
    </div>
  );
};
export default Sections;
