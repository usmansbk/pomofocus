import { useState } from "react";
import TabBar from "./Tab";
import { NoData } from "./common";

const charts = [
  {
    id: "day",
    label: "Day",
  },
  {
    id: "week",
    label: "Week",
  },
  {
    id: "year",
    label: "Year",
  },
];

const Chart = () => {
  const [activeIndex, setIndex] = useState(1);
  return (
    <div>
      <TabBar tabs={charts} activeIndex={activeIndex} onPress={setIndex} />
      <NoData />
    </div>
  );
};

export default Chart;
