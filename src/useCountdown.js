export default function useCountdown({ minutes }) {
  const time = minutes * 60;
  return {
    start: () => null,
    stop: () => null,
    ticking: false,
    timeLeft: 0,
    progress: 0,
  };
}
