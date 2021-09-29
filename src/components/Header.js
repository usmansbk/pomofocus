import Logo from "./Logo";
import Icon from "./Icon";
import classes from "./Header.module.css";

function Button({ icon, children }) {
  return (
    <button className={classes.button}>
      <Icon name={icon} />
      {children}
    </button>
  );
}

export default function Header() {
  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <Logo />
        <ul className={classes.nav}>
          <li>
            <Button icon="insert_chart_outlined" />
          </li>
          <li>
            <Button icon="settings" />
          </li>
          <li>
            <Button icon="account_circle" />
          </li>
        </ul>
      </div>
    </header>
  );
}
