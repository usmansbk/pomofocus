import classes from "./Report.module.css";

export const Title = ({ children }) => (
  <div className={classes.titleContainer}>
    <h3 className={classes.title}>{children}</h3>
    <hr className={classes.titleLine} />
  </div>
);

export const NoData = () => (
  <div className={classes.noData}>
    <p className={classes.note}>
      * This report will be available when you are logged in
    </p>
  </div>
);
