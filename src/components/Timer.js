import { useCallback, useEffect } from "react";
import clsx from "clsx";
import Icon from "./Icon";
import Progress from "./Progress";
import classes from "./Timer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementRound, setMode } from "../redux/timerSlice";
import {
  LONG_BREAK,
  POMODORO,
  SHORT_BREAK,
  START,
  STOP,
  TIME_FOR_A_BREAK,
  TIME_TO_FOCUS,
} from "../constants";
import { updateFavicon, updateTitle, formatTime } from "../helpers";
import useCountdown from "../useCountdown";

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
  const { ticking, start, stop, timeLeft, progress } = useCountdown({
    minutes: modes[mode].time,
    onStop: () => {
      updateFavicon(STOP);
    },
    onStart: () => {
      updateFavicon(START);
    },
  });

  useEffect(() => {
    updateTitle(timeLeft, mode);
  }, [mode, timeLeft]);

  const jumpTo = useCallback(
    (id) => {
      updateFavicon(id);
      dispatch(setMode(id));
    },
    [dispatch]
  );

  const skip = useCallback(() => {
    switch (mode) {
      case LONG_BREAK:
      case SHORT_BREAK:
        jumpTo(POMODORO);
        break;
      default:
        jumpTo(SHORT_BREAK);
        dispatch(incrementRound());
        break;
    }
  }, [dispatch, jumpTo, mode]);

  return (
    <div>
      <Progress percent={progress} />
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
          <div className={classes.time}>{formatTime(timeLeft)}</div>
          <div className={classes.actionButtons}>
            <PrimaryButton
              active={ticking}
              onClick={ticking ? stop : start}
              color={classes[mode]}
            />
            <div className={classes.skipAction}>
              <SkipButton
                className={ticking && classes.showSkip}
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
