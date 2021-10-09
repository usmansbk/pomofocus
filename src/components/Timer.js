import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import Icon from "./Icon";
import Progress from "./Progress";
import classes from "./Timer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nextRound, setMode } from "../redux/timerSlice";
import { POMODORO } from "../constants";

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

const PrimaryButton = ({ active, onClick, color }) => (
  <button
    onClick={onClick}
    className={clsx(
      classes.primaryButton,
      active && classes.primaryActive,
      color
    )}
  >
    {active ? "Stop" : "Start"}
  </button>
);

const SkipButton = ({ onClick, className }) => (
  <button onClick={onClick} className={clsx(classes.skipButton, className)}>
    <Icon name="skip_next" size={48} />
  </button>
);

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
  const { mode, round, modes } = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  const [currentTime, setCurrentTime] = useState(0);
  const time = modes[mode].time * 60;
  const [isRunning, setRunning] = useState(false);

  const toggleClock = useCallback(() => setRunning((prev) => !prev), []);
  const stopRunning = useCallback(() => setRunning(false), []);
  const onRunning = useCallback((curr) => setCurrentTime(curr), []);

  return (
    <div>
      <Progress percent={(currentTime / time) * 100} />
      <div className={classes.container}>
        <div className={classes.content}>
          <ul>
            {Object.values(modes).map(({ id, label }) => (
              <SecondaryButton
                key={id}
                active={id === mode}
                id={id}
                onClick={() => dispatch(setMode(id))}
              >
                {label}
              </SecondaryButton>
            ))}
          </ul>
          <Countdown
            key={time}
            ticking={isRunning}
            from={time}
            onTimeout={stopRunning}
            onTick={onRunning}
          />
          <div className={classes.actionButtons}>
            <PrimaryButton
              active={isRunning}
              onClick={toggleClock}
              color={classes[mode]}
            />
            <div className={classes.skipAction}>
              <SkipButton
                className={isRunning && classes.showSkip}
                onClick={() => dispatch(nextRound())}
              />
            </div>
          </div>
        </div>
        <div className={classes.counter}>#{round}</div>
        <footer className={classes.footer}>
          {mode === POMODORO ? "Time to focus!" : "Time for a break!"}
        </footer>
      </div>
    </div>
  );
}
