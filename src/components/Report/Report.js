import clsx from "clsx";
import { useState } from "react";
import Modal from "../Modal";
import Summary from "./Summary";
import Detail from "./Detail";
import Ranking from "./Ranking";
import classes from "./Report.module.css";

const tabs = [
  {
    id: "summary",
    label: "Summary",
  },
  {
    id: "detail",
    label: "Detail",
  },
  {
    id: "ranking",
    label: "Ranking",
  },
];

const TabItem = ({ label, active, index, onPress }) => (
  <button
    onClick={() => onPress(index)}
    className={clsx(classes.tabItem, active && classes.active)}
  >
    {label}
  </button>
);

const TabBar = ({ activeIndex, onPress }) => (
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

const Tab = ({ active, children }) => {
  return active ? children : null;
};

export default function Report() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Modal className={classes.modal}>
      <div className={classes.container}>
        <TabBar activeIndex={activeIndex} onPress={setActiveIndex} />
        <div>
          <Tab active={activeIndex === 0}>
            <Summary />
          </Tab>
          <Tab active={activeIndex === 1}>
            <Detail />
          </Tab>
          <Tab active={activeIndex === 2}>
            <Ranking />
          </Tab>
        </div>
      </div>
    </Modal>
  );
}
