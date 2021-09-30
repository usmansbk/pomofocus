import classes from "./Modal.module.css";

export default function Modal() {
  return (
    <div className={classes.container}>
      <div className={classes.overlay} />
      <div className={classes.content}></div>
    </div>
  );
}
