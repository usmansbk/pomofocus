import classes from "./Timer.module.css";

const RadioButton = ({ children }) => {
  return <button className={classes.radioButton}>{children}</button>;
};

const buttons = [
  {
    id: "pomodoro",
    label: "Pomodoro",
  },
  {
    id: "short-break",
    label: "Short Break",
  },
  {
    id: "long-break",
    label: "Long Break",
  },
];

export default function Timer() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <ul>
          {buttons.map(({ id, label }) => (
            <RadioButton id={id}>{label}</RadioButton>
          ))}
        </ul>
      </div>
    </div>
  );
}
