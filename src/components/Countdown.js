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
    if (time <= 1) {
      clearInterval(timerId.current);
      timerId.current = null;
      onTimeout();
    } else {
      const tock = time - 1;
      setTime(tock);
      onTick(tock);
    }
  }, [time, onTimeout, onTick]);

  useEffect(() => {
    if (ticking) {
      timerId.current = setInterval(tick, 1000);
    } else {
      clearInterval(timerId.current);
      timerId.current = null;
    }

    return () => clearInterval(timerId.current);
  }, [tick, ticking]);

  return <div className={classes.time}>{formatTime(time)}</div>;
}
