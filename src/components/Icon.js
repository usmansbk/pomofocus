const Icon = ({ name, size = 24 }) => (
  <span
    className="material-icons"
    style={{
      fontSize: size,
    }}
  >
    {name}
  </span>
);

export default Icon;
