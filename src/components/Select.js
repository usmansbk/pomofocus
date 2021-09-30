import Icon from "./Icon";
import classes from "./Select.module.css";

export default function Select({ value }) {
  return (
    <div className={classes.container}>
      <button className={classes.button}>
        <span>{value}</span>
        <Icon name="arrow_drop_down" />
      </button>
      <ul className={classes.items}></ul>
    </div>
  );
}
