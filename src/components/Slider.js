import classes from "./Slider.module.css";

export default function Slider() {
  const value = 0;
  return (
    <div className={classes.container}>
      <span className={classes.label}>{value}</span>
      <input type="range" min={0} max={100} className={classes.input} />
    </div>
  );
}
