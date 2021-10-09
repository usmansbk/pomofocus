/* eslint-disable no-restricted-globals */
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import Icon from "./Icon";
import Progress from "./Progress";
import Countdown from "./Countdown";
import classes from "./Timer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementRound, setMode } from "../redux/timerSlice";
import {
  CONFIRM,
  POMODORO,
  SHORT_BREAK,
  START,
  STOP,
  TIME_FOR_A_BREAK,
  TIME_TO_FOCUS,
} from "../constants";
import { updateFavicon, updateTitle } from "../helpers";

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
    {active ? STOP : START}
  </button>
);

const SkipButton = ({ onClick, className }) => (
  <button onClick={onClick} className={clsx(classes.skipButton, className)}>
    <Icon name="skip_next" size={48} />
  </button>
);

export default function Timer() {
  const dispatch = useDispatch();
  const { mode, round, modes } = useSelector((state) => state.timer);
  const time = modes[mode].time * 60;
  const [status, setStatus] = useState(STOP);
  const [currentTime, setCurrentTime] = useState(time);

  const isRunning = status === START;

  const stopRunning = useCallback(() => setStatus(STOP), []);

  const onRunning = useCallback(
    (curr) => {
      setCurrentTime(curr);
      updateTitle(curr, mode);
    },
    [mode]
  );

  useEffect(() => {
    updateFavicon(mode);
    updateTitle(time, mode);
  }, [mode, time]);

  const toggleClock = useCallback(() => {
    if (isRunning) {
      setStatus(STOP);
      updateFavicon(STOP);
    } else {
      setStatus(START);
    }
  }, [isRunning]);

  const jumpTo = useCallback(
    (id) => {
      let shouldJump = true;
      if (isRunning) {
        shouldJump = confirm(CONFIRM);
      }
      if (shouldJump) {
        stopRunning();
        dispatch(setMode(id));
      }

      return shouldJump;
    },
    [isRunning, stopRunning, dispatch]
  );

  const skip = useCallback(() => {
    const skipped = jumpTo(mode === POMODORO ? SHORT_BREAK : POMODORO);
    if (skipped && mode === POMODORO) {
      dispatch(incrementRound());
    }
  }, [dispatch, jumpTo, mode]);

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
                onClick={() => jumpTo(id)}
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
                onClick={skip}
              />
            </div>
          </div>
        </div>
        <div className={classes.counter}>#{round}</div>
        <footer className={classes.footer}>
          {mode === POMODORO ? TIME_TO_FOCUS : TIME_FOR_A_BREAK}
        </footer>
      </div>
    </div>
  );
}
