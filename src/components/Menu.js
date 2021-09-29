import { useState } from "react";
import clsx from "clsx";
import classes from "./Menu.module.css";

export default function Menu({ children, menuButton }) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div
        className={clsx(classes.overlay, visible && classes.visible)}
        onClick={() => setVisible(false)}
      />
      <div className={classes.menuContent}>
        {menuButton(() => setVisible(!visible))}
        <div className={clsx(classes.container, visible && classes.visible)}>
          {children}
        </div>
      </div>
    </div>
  );
}
