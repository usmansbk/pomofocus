import Modal from "./Modal";
import classes from "./Settings.module.css";

export default function Settings() {
  return (
    <Modal>
      <div className={classes.container}>
        <div className={classes.content}>
          <h2 className={classes.title}>Timer Settings</h2>
        </div>
      </div>
    </Modal>
  );
}
