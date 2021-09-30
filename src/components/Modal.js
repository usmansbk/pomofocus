import { useHistory } from "react-router";
import Icon from "./Icon";
import classes from "./Modal.module.css";

export default function Modal({ children }) {
  const history = useHistory();
  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className={classes.container}>
      <div className={classes.overlay} onClick={back} />
      <div className={classes.content}>
        <button className={classes.closeButton} onClick={back}>
          <Icon name="close" />
        </button>
        {children}
      </div>
    </div>
  );
}
