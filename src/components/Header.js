import Logo from "./Logo";
import Icon from "./Icon";
import classes from "./Header.module.css";
import Menu from "./Menu";
import GoogleLogo from "../assets/google-black.png";
import EmailLogo from "../assets/envelope-black.png";
import { useState } from "react";

function Button({ icon, children, onClick }) {
  return (
    <button className={classes.button} onClick={onClick}>
      <Icon name={icon} />
      <span className={classes.label}>{children}</span>
    </button>
  );
}

function ImageButton({ children, src }) {
  return (
    <button className={classes.imageButton}>
      <img src={src} alt="" className={classes.imageIcon} />
      {children}
    </button>
  );
}

export default function Header() {
  const [visible, setVisible] = useState(false);

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
          <li className={classes.navItem}>
            <Button icon="account_circle" onClick={() => setVisible(!visible)}>
              Login
            </Button>
            <Menu visible={visible}>
              <ImageButton src={GoogleLogo}>Login with Google</ImageButton>
              <ImageButton src={EmailLogo}>Login with Email</ImageButton>
            </Menu>
          </li>
        </ul>
      </div>
    </header>
  );
}
