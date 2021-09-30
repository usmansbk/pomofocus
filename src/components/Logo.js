import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import classes from "./Logo.module.css";

export default function Logo() {
  return (
    <h1 className={classes.text}>
      <Link to="/" className={classes.link}>
        <img src={logo} alt="pomofocus-logo" className={classes.logo} />
        Pomofocus
      </Link>
    </h1>
  );
}
