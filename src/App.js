import Header from "./components/Header";
import classes from "./App.module.css";
import Timer from "./components/Timer";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <Timer />
      </div>
    </div>
  );
}

export default App;
