import Logo from "./Logo";
import IconButton from "./IconButton";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <Logo />
        <ul className={classes.nav}>
          <li>
            <IconButton icon="insert_chart_outlined" />
          </li>
          <li>
            <IconButton icon="settings" />
          </li>
          <li>
            <IconButton icon="account_circle" />
          </li>
        </ul>
      </div>
    </header>
  );
}
