import clsx from "clsx";
import classes from "./Switch.module.css";

const Knob = () => <div className={classes.knob} />;

export default function Switch({ onClick, on }) {
  return (
    <button
      className={clsx(classes.button, on ? classes.on : classes.off)}
      onClick={onClick}
    >
      <Knob />
    </button>
  );
}
