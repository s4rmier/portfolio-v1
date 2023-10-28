export default function Skill(props) {
  return (
    <figure className="skill flex-col align justify">
      <img src={props.img} alt="" />
      <figcaption>
        <h3>{props.label}</h3>
      </figcaption>
    </figure>
  );
}
