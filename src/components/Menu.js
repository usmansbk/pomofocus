import { useCallback, useEffect, useRef, useState } from "react";
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
  const containerRef = useRef();
  const [visible, setVisible] = useState(false);
  const onDismiss = useCallback(() => setVisible(false), []);
  const handleToggle = useCallback(() => setVisible((prev) => !prev), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={classes.container} ref={containerRef}>
      {menuButton(handleToggle)}
      {visible && (
        <div onClick={onDismiss} className={classes.content}>
          {children}
        </div>
      )}
    </div>
  );
}
