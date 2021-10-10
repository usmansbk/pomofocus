import { useCallback, useEffect, useState } from "react";

export default function useCountdown({ minutes, onStart, onStop }) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  const [ticking, setTicking] = useState(false);

  useEffect(() => {
    setTimeLeft(minutes * 60);
  }, [minutes]);

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
    progress: 0,
  };
}
