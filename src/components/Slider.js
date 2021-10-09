import classes from "./Slider.module.css";

export default function Slider({ value, onChange }) {
  return (
    <div className={classes.container}>
      <span className={classes.label}>{value}</span>
      <input
        value={value}
        onChange={onChange}
        type="range"
        min={0}
        max={100}
        className={classes.input}
      />
    </div>
  );
}
