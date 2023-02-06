const Sections = (props) => {
  console.log(props.chapters_info.title);

  return (
    <div>
      {props.chapters_info.map((chapter) => (
        <section id={chapter.id} className="">
          <h3 className="stylized">{chapter.title}</h3>
          <div className="content">Content</div>
        </section>
      ))}
    </div>
  );
};
export default Sections;
