import clsx from "clsx";
import classes from "./Timer.module.css";

const SecondaryButton = ({ children, active }) => {
  return (
    <button className={clsx(classes.secondaryButton, active && classes.active)}>
      {children}
    </button>
  );
};

const PrimaryButton = ({ children }) => (
  <button className={classes.primaryButton}>{children}</button>
);

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
            <SecondaryButton active={id === mode} id={id}>
              {label}
            </SecondaryButton>
          ))}
        </ul>
        <div className={classes.time}>{time}</div>
        <div>
          <PrimaryButton>Start</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
