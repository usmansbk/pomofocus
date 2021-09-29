import { useState } from "react";
import clsx from "clsx";
import Icon from "./Icon";
import classes from "./Timer.module.css";

const SecondaryButton = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        classes.secondaryButton,
        active && classes.secondaryActive
      )}
    >
      {children}
    </button>
  );
};

const PrimaryButton = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={clsx(classes.primaryButton, active && classes.primaryActive)}
  >
    {active ? "Stop" : "Start"}
  </button>
);

const SkipButton = ({ onClick }) => (
  <button onClick={onClick} className={classes.skipButton}>
    <Icon name="skip_next" size={48} />
  </button>
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
  const [mode, setMode] = useState("pomodoro");
  const [time] = useState("25:00");
  const [round, setRound] = useState(1);
  const [isRunning, setRunning] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <ul>
          {buttons.map(({ id, label }) => (
            <SecondaryButton
              key={id}
              active={id === mode}
              id={id}
              onClick={() => setMode(id)}
            >
              {label}
            </SecondaryButton>
          ))}
        </ul>
        <div className={classes.time}>{time}</div>
        <div className={classes.actionButtons}>
          <PrimaryButton
            active={isRunning}
            onClick={() => setRunning(!isRunning)}
          />
          <div
            className={clsx(classes.skipAction, isRunning && classes.showSkip)}
          >
            <SkipButton onClick={() => setRound(round + 1)} />
          </div>
        </div>
      </div>
      <div className={classes.counter}>#{round}</div>
      <footer className={classes.footer}>Time to focus!</footer>
    </div>
  );
}
