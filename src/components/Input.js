import classes from "./Input.module.css";

export default function Input({ id, label, type, name, placeholder }) {
  return (
    <div className={classes.container}>
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      <input
        className={classes.input}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
