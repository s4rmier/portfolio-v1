import { Link } from "react-router-dom";

export default function NavLink(props) {
  return (
    <Link to={props.url}>
      <li
        className={props.isActive && "active-nav"}
        onClick={props.clickHandler}
      >
        {props.label}
      </li>
    </Link>
  );
}
