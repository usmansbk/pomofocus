import clsx from "clsx";
import { useCallback, useRef, useState, useEffect } from "react";
import Icon from "./Icon";
import classes from "./Select.module.css";

const Item = ({ children, selected }) => (
  <button className={clsx(classes.item, selected && classes.selected)}>
    {children}
  </button>
);

const Button = ({ value, onClick }) => (
  <button className={classes.button} onClick={onClick}>
    <span>{value}</span>
    <Icon name="arrow_drop_down" />
  </button>
);

export default function Select({ value, items = [] }) {
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = items.find((item) => item.value === value);
  return (
    <div className={classes.container} ref={containerRef}>
      <Button value={selected?.label} onClick={toggle} />
      {open && (
        <div className={classes.content} onClick={toggle}>
          <ul className={classes.items}>
            {items.map(({ value, label }) => (
              <Item selected={selected?.value === value} key={value}>
                {label}
              </Item>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
