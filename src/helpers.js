import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import {
  LONG_BREAK,
  POMODORO,
  SHORT_BREAK,
  TIME_FOR_A_BREAK,
  TIME_TO_FOCUS,
} from "./constants";

dayjs.extend(duration);

export function formatTime(time) {
  return dayjs.duration(time, "seconds").format("mm:ss");
}

export function updateTitle(time, mode) {
  const message = mode === POMODORO ? TIME_TO_FOCUS : TIME_FOR_A_BREAK;
  document.title = `${formatTime(time)} - ${message}`;
}

function getFaviconEl() {
  return document.getElementById("favicon");
}

export function updateFavicon(mode) {
  const favicon = getFaviconEl();
  switch (mode) {
    case POMODORO:
      favicon.href = "favicon.ico";
      break;
    case SHORT_BREAK:
      favicon.href = "favicon-green-16x16.png";
      break;
    case LONG_BREAK:
      favicon.href = "favicon-blue-16x16.png";
      break;
    default:
      favicon.href = "favicon-gray-16x16.png";
      break;
  }
}
