import clsx from "clsx";
import classes from "./Input.module.css";

export default function Input({
  id,
  label,
  type,
  name,
  placeholder,
  className,
  min,
}) {
  return (
    <div className={clsx(classes.container, className)}>
      {!!label && (
        <label htmlFor={id} className={classes.label}>
          {label}
        </label>
      )}
      <input
        min={min}
        className={classes.input}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
