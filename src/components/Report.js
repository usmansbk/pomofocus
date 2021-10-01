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

const TabItem = ({ label }) => (
  <button className={classes.tabItem}>{label}</button>
);

const TabBar = () => (
  <header className={classes.header}>
    {tabs.map(({ id, label }) => (
      <TabItem key={id} label={label} />
    ))}
  </header>
);

export default function Report() {
  return (
    <Modal>
      <div className={classes.container}>
        <TabBar />
      </div>
    </Modal>
  );
}
