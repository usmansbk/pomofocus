import clsx from "clsx";
import classes from "./Report.module.css";

const TabItem = ({ label, active, index, onPress }) => (
  <button
    onClick={() => onPress(index)}
    className={clsx(classes.tabItem, active && classes.active)}
  >
    {label}
  </button>
);

const TabBar = ({ activeIndex, onPress, tabs = [] }) => (
  <header className={classes.header}>
    {tabs.map(({ id, label }, index) => (
      <TabItem
        onPress={onPress}
        key={id}
        id={id}
        index={index}
        label={label}
        active={activeIndex === index}
      />
    ))}
  </header>
);

export default TabBar;
