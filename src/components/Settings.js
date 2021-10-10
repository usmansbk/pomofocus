import clsx from "clsx";
import { useHistory } from "react-router";
import Input from "./Input";
import Modal from "./Modal";
import Select from "./Select";
import Slider from "./Slider";
import Switch from "./Switch";
import Button from "./Button";
import classes from "./Settings.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setAlarmRepeat,
  setAlarmSound,
  setAlarmVolume,
  setLongBreakInterval,
  setTickingSound,
  setTickingVolume,
  toggleAutoBreaks,
  toggleAutoPomodoros,
  updateModeTime,
} from "../redux/timerSlice";
import {
  BELL_SOUND,
  DIGITAL_SOUND,
  FAST_TICKING,
  NO_SOUND,
  SLOW_TICKING,
} from "../constants";

const alarmSounds = [
  {
    value: BELL_SOUND,
    label: "Bell",
  },
  {
    value: DIGITAL_SOUND,
    label: "Digital",
  },
];

const tickingSounds = [
  {
    value: NO_SOUND,
    label: "None",
  },
  {
    value: FAST_TICKING,
    label: "Ticking Fast",
  },
  {
    value: SLOW_TICKING,
    label: "Ticking Slow",
  },
];

const Item = ({ children, col }) => (
  <div className={clsx(classes.item, col && classes.column)}>{children}</div>
);

const Label = ({ children }) => (
  <label className={classes.label}>{children}</label>
);

const Row = ({ children, right, margin }) => (
  <div
    className={clsx(
      classes.row,
      right && classes.right,
      margin && classes.marginTop
    )}
  >
    {children}
  </div>
);

export default function Settings() {
  const history = useHistory();
  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  const {
    modes,
    autoBreaks,
    autoPomodoros,
    longBreakInterval,
    alarmSound,
    alarmVolume,
    alarmRepeat,
    tickingSound,
    tickingVolume,
  } = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  return (
    <Modal>
      <div>
        <div className={classes.content}>
          <h2 className={classes.title}>Timer Settings</h2>
          <div>
            <Item col>
              <Label>Time (minutes)</Label>
              <div className={classes.inputsRow}>
                {Object.values(modes).map(({ id, label, time }) => (
                  <Input
                    key={id}
                    className={classes.smallInput}
                    onChange={(e) => {
                      dispatch(
                        updateModeTime({ mode: id, time: e.target.value })
                      );
                    }}
                    min={1}
                    label={label}
                    type="number"
                    value={time}
                  />
                ))}
              </div>
            </Item>
            <Item>
              <Label>Auto start Breaks?</Label>
              <Switch
                on={autoBreaks}
                onClick={() => dispatch(toggleAutoBreaks())}
              />
            </Item>
            <Item>
              <Label>Auto start Pomodoros?</Label>
              <Switch
                on={autoPomodoros}
                onClick={() => dispatch(toggleAutoPomodoros())}
              />
            </Item>
            <Item>
              <Label>Long Break interval</Label>
              <Input
                className={classes.tinyInput}
                min={1}
                type="number"
                value={longBreakInterval}
                onChange={(e) => dispatch(setLongBreakInterval(e.target.value))}
              />
            </Item>
            <Item col>
              <Row>
                <Label>Alarm Sound</Label>
                <Select
                  value={alarmSound}
                  items={alarmSounds}
                  onChange={(val) => dispatch(setAlarmSound(val))}
                />
              </Row>
              <Row right margin>
                <Slider
                  value={alarmVolume}
                  onChange={(e) => dispatch(setAlarmVolume(e.target.value))}
                />
              </Row>
              <Row right margin>
                <Input
                  min={1}
                  type="number"
                  label="Repeat"
                  value={alarmRepeat}
                  onChange={(e) => dispatch(setAlarmRepeat(e.target.value))}
                  className={classes.tinyInput}
                />
              </Row>
            </Item>
            <Item col>
              <Row>
                <Label>Ticking Sound</Label>
                <Select
                  value={tickingSound}
                  items={tickingSounds}
                  onChange={(val) => dispatch(setTickingSound(val))}
                />
              </Row>
              <Row right margin>
                <Slider
                  value={tickingVolume}
                  onChange={(e) => dispatch(setTickingVolume(e.target.value))}
                />
              </Row>
            </Item>
          </div>
        </div>
        <footer className={classes.footer}>
          <div>
            <Button onClick={back}>OK</Button>
          </div>
        </footer>
      </div>
    </Modal>
  );
}
