import Menu, { MenuItem } from "./Menu";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import classes from "./Header.module.css";
import GoogleLogo from "../assets/google-black.png";
import EmailLogo from "../assets/envelope-black.png";
import { useCallback } from "react";

function Button({ icon, children, onClick }) {
  return (
    <button className={classes.button} onClick={onClick}>
      <Icon name={icon} />
      <span className={classes.label}>{children}</span>
    </button>
  );
}

export default function Header() {
  const renderMenuButton = useCallback(
    (onClick) => (
      <Button icon="account_circle" onClick={onClick}>
        Login
      </Button>
    ),
    []
  );
  const loginWithGoogle = useCallback(() => console.log("Google"), []);
  const loginWithEmail = useCallback(() => console.log("Email"), []);

  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <Logo />
        <ul className={classes.nav}>
          <li>
            <Link to="/report">
              <Button icon="insert_chart_outlined">Report</Button>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <Button icon="settings">Setting</Button>
            </Link>
          </li>
          <li>
            <Menu menuButton={renderMenuButton}>
              <MenuItem src={GoogleLogo} onClick={loginWithGoogle}>
                Login with Google
              </MenuItem>
              <MenuItem src={EmailLogo} onClick={loginWithEmail}>
                Login with Email
              </MenuItem>
            </Menu>
          </li>
        </ul>
      </div>
    </header>
  );
}
