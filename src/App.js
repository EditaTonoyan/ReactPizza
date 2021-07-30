import "./App.css";
import AllPizzas from "./components/Header";
import Chart from "./components/Chart";
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
      </Switch>
    </div>
  );
}

export default App;
