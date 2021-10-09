import { useState } from "react";
import Modal from "../Modal";
import Summary from "./Summary";
import Detail from "./Detail";
import { TabBar, Tab } from "./common";
import classes from "./index.module.css";

const tabs = [
  {
    id: "summary",
    label: "Summary",
  },
  {
    id: "detail",
    label: "Detail",
  },
];

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
        </div>
      </div>
    </Modal>
  );
}
