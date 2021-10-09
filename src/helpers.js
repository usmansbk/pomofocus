import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { LONG_BREAK, PAUSED, SHORT_BREAK } from "./constants";

dayjs.extend(duration);

export function formatTime(time) {
  return dayjs.duration(time, "seconds").format("mm:ss");
}

function getFaviconEl() {
  return document.getElementById("favicon");
}

export function updateFavicon(mode) {
  const favicon = getFaviconEl();
  switch (mode) {
    case SHORT_BREAK: {
      favicon.href = "favicon-green-16x16.png";
      break;
    }
    case LONG_BREAK: {
      favicon.href = "favicon-blue-16x16.png";
      break;
    }
    case PAUSED: {
      favicon.href = "favicon-gray-16x16.png";
      break;
    }
    default:
      favicon.href = "favicon.ico";
      break;
  }
}
