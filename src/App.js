import { useEffect } from "react";
import "./App.css";
import AllPizzas from "./components/Header";
import Chart from "./components/Chart";
import JoinUs from "./components/JoinUs";
import LogIn from "./components/LogIn";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unprotectedRoute } from "./components/protected.route";
import { setUser } from "./store/action";

function App() {
  const UnprotectedSignIn = unprotectedRoute(LogIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      dispatch(setUser());
    }
  }, [dispatch]);

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
