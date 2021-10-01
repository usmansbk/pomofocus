import Title from "./Title";
import Icon from "../Icon";
import classes from "./Report.module.css";

const Card = ({ icon, label, value = "--" }) => (
  <div className={classes.card}>
    <div className={classes.cardIcon}>
      <Icon name={icon} size={32} />
    </div>
    <div className={classes.cardTitle}>{value}</div>
    <div className={classes.cardLabel}>{label}</div>
  </div>
);

const Cards = () => (
  <div>
    <div className={classes.noData}>
      <p className={classes.note}>
        * This report will be available when you are logged in
      </p>
    </div>
    <div className={classes.cards}>
      <Card icon="schedule" label="hours focused" />
      <Card icon="date_range" label="days accessed" />
      <Card icon="whatshot" label="day streak" />
    </div>
  </div>
);

export default function Summary() {
  return (
    <div>
      <Title>Activity Summary</Title>
      <Cards />
    </div>
  );
}
