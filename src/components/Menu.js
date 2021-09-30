import { useCallback, useState } from "react";
import clsx from "clsx";
import classes from "./Menu.module.css";

export default function Menu({ children, menuButton }) {
  const [visible, setVisible] = useState(false);
  const onDismiss = useCallback(() => setVisible(false), []);
  const onOpen = useCallback(() => setVisible((prev) => !prev), []);

  return (
    <div>
      <div className={classes.menuContent}>
        {menuButton(onOpen)}
        <div
          onClick={onDismiss}
          className={clsx(classes.container, visible && classes.visible)}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function MenuItem({ children, src, onClick }) {
  return (
    <button className={classes.menuItem} onClick={onClick}>
      {!!src && <img src={src} alt="" className={classes.imageIcon} />}
      {children}
    </button>
  );
}
