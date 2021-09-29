import classes from "./IconButton.module.css";

const Icon = ({ name }) => <span className="material-icons">{name}</span>;

export default function IconButton({ icon, children }) {
  return (
    <button className={classes.button}>
      <Icon name={icon} />
      {children}
    </button>
  );
}
