import "./App.css";
import AllPizzas from "./components/Header";
import OrderedList from "./components/OrderedList";
import EmptyChart from "./components/EmptyChart";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <AllPizzas />
        </Route>
        <Route exact path="/ordered">
          <OrderedList />
        </Route>
        <Route exact path="/empty">
          <EmptyChart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
