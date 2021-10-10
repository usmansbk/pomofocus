import classes from "./Progress.module.css";

export default function Progress({ percent }) {
  return (
    <div className={classes.container}>
      <div className={classes.progress} style={{ width: `${percent}%` }} />
    </div>
  );
}
