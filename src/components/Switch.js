import classes from "./Switch.module.css";

const Knob = () => <div className={classes.knob} />;

export default function Switch({ onClick }) {
  return (
    <button className={classes.button} onClick={onClick}>
      <Knob />
    </button>
  );
}
