import { useState } from "react";
import classes from "./Slider.module.css";

export default function Slider() {
  const [value, setValue] = useState(0);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={classes.container}>
      <span className={classes.label}>{value}</span>
      <input
        value={value}
        onChange={handleChange}
        type="range"
        min={0}
        max={100}
        className={classes.input}
      />
    </div>
  );
}
