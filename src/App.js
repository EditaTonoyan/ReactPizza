import "./App.css";
import AllPizzas from "./components/Header";
import Chart from "./components/Chart";
import JoinUs from "./components/JoinUs";
import LogIn from "./components/LogIn";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <AllPizzas />
        </Route>
        <Route exact path="/chart">
          <Chart />
        </Route>
        <Route exact path="/joinus">
          <JoinUs />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
