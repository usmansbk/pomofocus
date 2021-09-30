import classes from "./Modal.module.css";

export default function Modal({ children }) {
  return (
    <div className={classes.container}>
      <div className={classes.overlay} />
      <div className={classes.content}>{children}</div>
    </div>
  );
}
