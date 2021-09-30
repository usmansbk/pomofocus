import clsx from "clsx";
import { useHistory } from "react-router";
import Modal from "./Modal";
import classes from "./Settings.module.css";
import Switch from "./Switch";

const Item = ({ children, col }) => (
  <div className={clsx(classes.item, col && classes.column)}>{children}</div>
);

const Label = ({ children }) => (
  <label className={classes.label}>{children}</label>
);

const Button = ({ children, onClick }) => (
  <button className={classes.button} onClick={onClick}>
    {children}
  </button>
);

export default function Settings() {
  const history = useHistory();
  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <Modal>
      <div className={classes.container}>
        <div className={classes.content}>
          <h2 className={classes.title}>Timer Settings</h2>
          <div>
            <Item>
              <Label>Time (minutes)</Label>
            </Item>
            <Item>
              <Label>Auto start Breaks?</Label>
              <Switch />
            </Item>
            <Item>
              <Label>Auto start Pomodoros?</Label>
              <Switch />
            </Item>
            <Item>
              <Label>Long Break interval</Label>
            </Item>
            <Item>
              <Label>Alarm Sound</Label>
            </Item>
            <Item>
              <Label>Ticking Sound</Label>
            </Item>
            <Item>
              <Label>Dark Mode when running</Label>
              <Switch />
            </Item>
            <Item>
              <Label>Notification</Label>
            </Item>
          </div>
        </div>
        <footer className={classes.footer}>
          <Button onClick={back}>OK</Button>
        </footer>
      </div>
    </Modal>
  );
}
