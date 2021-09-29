import Menu from "./Menu";
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

function ImageButton({ children, src, onClick }) {
  return (
    <button className={classes.imageButton} onClick={onClick}>
      <img src={src} alt="" className={classes.imageIcon} />
      {children}
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
            <Menu menuButton={renderMenuButton}>
              <ImageButton
                src={GoogleLogo}
                onClick={() => console.log("Google")}
              >
                Login with Google
              </ImageButton>
              <ImageButton src={EmailLogo} onClick={() => console.log("Email")}>
                Login with Email
              </ImageButton>
            </Menu>
          </li>
        </ul>
      </div>
    </header>
  );
}
