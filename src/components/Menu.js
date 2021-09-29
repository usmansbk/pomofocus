import { useCallback, useState } from "react";
import clsx from "clsx";
import classes from "./Menu.module.css";

export default function Menu({ children, menuButton }) {
  const [visible, setVisible] = useState(false);
  const onDismiss = useCallback(() => setVisible(false), []);
  const onOpen = useCallback((e) => {
    setVisible(true);
    e.stopPropagation();
  }, []);

  return (
    <div onClick={onDismiss}>
      <div className={clsx(classes.overlay, visible && classes.visible)} />
      <div className={classes.menuContent}>
        {menuButton(onOpen)}
        <div className={clsx(classes.container, visible && classes.visible)}>
          {children}
        </div>
      </div>
    </div>
  );
}
