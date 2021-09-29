import Logo from "./Logo";
import Icon from "./Icon";
import classes from "./Header.module.css";

function Button({ icon, children }) {
  return (
    <button className={classes.button}>
      <Icon name={icon} />
      <span className={classes.label}>{children}</span>
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
            <Button icon="insert_chart_outlined">Report</Button>
          </li>
          <li>
            <Button icon="settings">Setting</Button>
          </li>
          <li>
            <Button icon="account_circle">Login</Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
