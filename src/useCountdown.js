import { useCallback, useEffect, useRef, useState } from "react";

export default function useCountdown({ minutes, onStart, onStop }) {
  const timerId = useRef(null);
  const time = minutes * 60;
  const [timeLeft, setTime] = useState(time);
  const [ticking, setTicking] = useState(false);

  const tick = useCallback(() => {
    setTime((time) => time - 1);
  }, []);

  useEffect(() => {
    const clear = () => {
      clearInterval(timerId.current);
      timerId.current = null;
    };

    if (ticking) {
      timerId.current = setInterval(tick, 1000);
    } else {
      clear();
    }

    return clear;
  }, [tick, ticking]);

  useEffect(() => {
    setTime(time);
  }, [time]);

  const start = useCallback(() => {
    setTicking(true);
    onStart?.();
  }, [onStart]);

  const stop = useCallback(() => {
    setTicking(false);
    onStop?.();
  }, [onStop]);

  return {
    start,
    stop,
    ticking,
    timeLeft,
    progress: (1 - timeLeft / time) * 100,
  };
}
