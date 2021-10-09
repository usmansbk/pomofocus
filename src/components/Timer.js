import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import Icon from "./Icon";
import classes from "./Timer.module.css";

dayjs.extend(duration);

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

const SkipButton = ({ onClick, className }) => (
  <button onClick={onClick} className={clsx(classes.skipButton, className)}>
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

function Countdown({
  ticking,
  from = 0,
  onTimeout = () => null,
  onTick = () => null,
}) {
  const timerId = useRef(null);
  const [time, setTime] = useState(from);

  const tick = useCallback(() => {
    if (ticking) {
      if (time <= 1) {
        onTimeout();
      }
      if (time === 0) {
        clearInterval(timerId.current);
        timerId.current = null;
      } else {
        setTime(time - 1);
        onTick(time);
      }
    }
  }, [time, ticking, onTimeout, onTick]);

  useEffect(() => {
    timerId.current = setInterval(tick, 1000);

    return () => clearInterval(timerId.current);
  }, [tick]);

  return (
    <div className={classes.time}>
      {dayjs.duration(time, "seconds").format("mm:ss")}
    </div>
  );
}

export default function Timer() {
  const [mode, setMode] = useState("pomodoro");
  const [time] = useState(25 * 60);
  const [round, setRound] = useState(1);
  const [isRunning, setRunning] = useState(false);

  const toggleClock = useCallback(() => setRunning((prev) => !prev), []);
  const stopRunning = useCallback(() => setRunning(false), []);
  const onRunning = useCallback(() => null, []);

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
        <Countdown
          ticking={isRunning}
          from={time}
          onTimeout={stopRunning}
          onTick={onRunning}
        />
        <div className={classes.actionButtons}>
          <PrimaryButton active={isRunning} onClick={toggleClock} />
          <div className={classes.skipAction}>
            <SkipButton
              className={isRunning && classes.showSkip}
              onClick={() => setRound(round + 1)}
            />
          </div>
        </div>
      </div>
      <div className={classes.counter}>#{round}</div>
      <footer className={classes.footer}>Time to focus!</footer>
    </div>
  );
}
