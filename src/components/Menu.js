import clsx from "clsx";
import classes from "./Menu.module.css";

export default function Menu({ children, visible }) {
  return (
    <div className={clsx(classes.container, visible && classes.visible)}>
      {children}
    </div>
  );
}
