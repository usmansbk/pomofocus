import { Provider } from "react-redux";
import Header from "./components/Header";
import classes from "./App.module.css";
import Timer from "./components/Timer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className={classes.container}>
        <Header />
        <div className={classes.content}>
          <Timer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
