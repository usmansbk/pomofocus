import clsx from "clsx";
import { NoData, Title } from "./common";
import classes from "./Detail.module.css";

function Table() {
  return (
    <table className={classes.table}>
      <tr className={clsx(classes.row, classes.headerRow)}>
        <th className={classes.header}>Date</th>
        <th className={classes.header}>Minutes</th>
      </tr>
    </table>
  );
}

export default function Detail() {
  return (
    <div>
      <Title>Focus Time Detail</Title>
      <NoData />
      <Table />
    </div>
  );
}
