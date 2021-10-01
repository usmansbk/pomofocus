import clsx from "clsx";
import classes from "./index.module.css";

export const Title = ({ children }) => (
  <div className={classes.titleContainer}>
    <h3 className={classes.title}>{children}</h3>
    <hr className={classes.titleLine} />
  </div>
);

export const NoData = () => (
  <div className={classes.noData}>
    <p className={classes.note}>
      * This report will be available when you are logged in
    </p>
  </div>
);

const TabItem = ({ label, active, index, onPress }) => (
  <button
    onClick={() => onPress(index)}
    className={clsx(classes.tabItem, active && classes.active)}
  >
    {label}
  </button>
);

export const Tab = ({ active, children }) => {
  return active ? children : null;
};

export const TabBar = ({ activeIndex, onPress, tabs = [] }) => (
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
