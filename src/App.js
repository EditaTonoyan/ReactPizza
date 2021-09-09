import "./App.css";
import AllPizzas from "./components/Header";
import Chart from "./components/Chart";
import JoinUs from "./components/JoinUs";
import LogIn from "./components/LogIn";
import { Route, Switch } from "react-router-dom";
import { unprotectedRoute } from "./components/protected.route";

function App() {
  const UnprotectedSignIn = unprotectedRoute(LogIn);

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

        <UnprotectedSignIn exact path="/login">
          <LogIn />
        </UnprotectedSignIn>
      </Switch>
    </div>
  );
}

export default App;
