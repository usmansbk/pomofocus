import { useCallback, useState } from "react";
import classes from "./Menu.module.css";

export function MenuItem({ children, src, onClick }) {
  return (
    <button className={classes.menuItem} onClick={onClick}>
      {!!src && <img src={src} alt="" className={classes.imageIcon} />}
      {children}
    </button>
  );
}

export default function Menu({ children, menuButton }) {
  const [visible, setVisible] = useState(false);
  const onDismiss = useCallback(() => setVisible(false), []);
  const handleToggle = useCallback(() => setVisible((prev) => !prev), []);

  return (
    <div className={classes.container}>
      {menuButton(handleToggle)}
      {visible && (
        <div onClick={onDismiss} className={classes.content}>
          {children}
        </div>
      )}
    </div>
  );
}
