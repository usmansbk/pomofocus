import Logo from "./Logo";
import Icon from "./Icon";
import classes from "./Header.module.css";
import Dropdown from "./Dropdown";

function Button({ icon, children }) {
  return (
    <button className={classes.button}>
      <Icon name={icon} />
      <span className={classes.label}>{children}</span>
    </button>
  );
}

function ImageButton({ children }) {
  return <button>{children}</button>;
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
            <Dropdown>
              <ImageButton>Login with Google</ImageButton>
              <ImageButton>Login with Email</ImageButton>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  );
}
