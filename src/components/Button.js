import Icon from "./Icon";
import classes from "./Button.module.css";

const Button = ({ children, onClick, icon }) => (
  <button className={classes.button} onClick={onClick}>
    {!!icon && <Icon name={icon} />}
    {children}
  </button>
);

export default Button;
