import Modal from "./Modal";
import Input from "./Input";
import classes from "./EmailLogin.module.css";
import Button from "./Button";

export default function EmailLogin() {
  return (
    <Modal className={classes.modal}>
      <div className={classes.container}>
        <h2 className={classes.title}>Pease Input Your Email</h2>
        <div className={classes.input}>
          <Input placeholder="example@email.com" />
        </div>
        <div className={classes.button}>
          <Button icon="email">Send Magic Link</Button>
        </div>
      </div>
    </Modal>
  );
}
