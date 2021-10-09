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
  toggleAutoBreaks,
  toggleAutoPomodoros,
  updateModeTime,
} from "../redux/timerSlice";

const alarmSounds = [
  {
    value: "bell",
    label: "Bell",
  },
  {
    value: "bird",
    label: "Bird",
  },
  {
    value: "digital",
    label: "Digital",
  },
  {
    value: "kitchen",
    label: "Kitchen",
  },
  {
    value: "wood",
    label: "Wood",
  },
];

const tickingSounds = [
  {
    value: "none",
    label: "None",
  },
  {
    value: "fast",
    label: "Ticking Fast",
  },
  {
    value: "slow",
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
              />
            </Item>
            <Item col>
              <Row>
                <Label>Alarm Sound</Label>
                <Select value={alarmSound} items={alarmSounds} />
              </Row>
              <Row right margin>
                <Slider value={alarmVolume} />
              </Row>
              <Row right margin>
                <Input
                  min={1}
                  type="number"
                  label="Repeat"
                  value={alarmRepeat}
                  className={classes.tinyInput}
                />
              </Row>
            </Item>
            <Item col>
              <Row>
                <Label>Ticking Sound</Label>
                <Select value={tickingSound} items={tickingSounds} />
              </Row>
              <Row right margin>
                <Slider value={tickingVolume} />
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
