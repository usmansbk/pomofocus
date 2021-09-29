import clsx from "clsx";
import classes from "./Timer.module.css";

const RadioButton = ({ children, active }) => {
  return (
    <button className={clsx(classes.radioButton, active && classes.active)}>
      {children}
    </button>
  );
};

const buttons = [
  {
    id: "pomodoro",
    label: "Pomodoro",
  },
  {
    id: "short-break",
    label: "Short Break",
  },
  {
    id: "long-break",
    label: "Long Break",
  },
];

export default function Timer() {
  const mode = "pomodoro";
  const time = "25:00";

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <ul>
          {buttons.map(({ id, label }) => (
            <RadioButton active={id === mode} id={id}>
              {label}
            </RadioButton>
          ))}
        </ul>
        <div className={classes.time}>{time}</div>
      </div>
    </div>
  );
}
