import clsx from "clsx";
import Modal from "./Modal";
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

const TabItem = ({ label, active }) => (
  <button className={clsx(classes.tabItem, active && classes.active)}>
    {label}
  </button>
);

const TabBar = ({ activeIndex }) => (
  <header className={classes.header}>
    {tabs.map(({ id, label }, index) => (
      <TabItem key={id} id={id} label={label} active={activeIndex === index} />
    ))}
  </header>
);

export default function Report() {
  return (
    <Modal className={classes.modal}>
      <div className={classes.container}>
        <TabBar activeIndex={0} />
      </div>
    </Modal>
  );
}
