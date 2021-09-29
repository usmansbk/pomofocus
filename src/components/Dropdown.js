import classes from "./Dropdown.module.css";

export default function Dropdown({ children }) {
  return <div className={classes.container}>{children}</div>;
}
