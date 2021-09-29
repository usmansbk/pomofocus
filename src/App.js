import Header from "./components/Header";
import classes from "./App.module.css";
import Progress from "./components/Progress";
import Timer from "./components/Timer";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <div className={classes.body}>
          <Progress />
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default App;
