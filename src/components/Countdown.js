import React, { useRef, useEffect, useState, useCallback } from "react";
import { formatTime } from "../helpers";
import classes from "./Countdown.module.css";

export default function Countdown({
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
        const tock = time - 1;
        setTime(tock);
        onTick(tock);
      }
    }
  }, [time, ticking, onTimeout, onTick]);

  useEffect(() => {
    timerId.current = setInterval(tick, 1000);

    return () => clearInterval(timerId.current);
  }, [tick]);

  return <div className={classes.time}>{formatTime(time)}</div>;
}
