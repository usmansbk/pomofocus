import classes from "./Report.module.css";

const Title = ({ children }) => (
  <div className={classes.titleContainer}>
    <h3 className={classes.title}>{children}</h3>
    <hr className={classes.titleLine} />
  </div>
);

export default Title;
