import clsx from "clsx";
import { useState } from "react";
import Modal from "../Modal";
import Summary from "./Summary";
import Detail from "./Detail";
import Ranking from "./Ranking";
import TabBar from "./Tab";
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

const Tab = ({ active, children }) => {
  return active ? children : null;
};

export default function Report() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Modal className={classes.modal}>
      <div className={classes.container}>
        <TabBar
          activeIndex={activeIndex}
          onPress={setActiveIndex}
          tabs={tabs}
        />
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
