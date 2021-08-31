import "./App.css";
import AllPizzas from "./components/Header";
import Chart from "./components/Chart";
import JoinUs from "./components/JoinUs";
import LogIn from "./components/LogIn";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logDOM } from "@testing-library/react";

function App() {
  const { isLoggedIn } = useSelector((state) => state.registerState);

  console.log("app", isLoggedIn);
  const dispatch = useDispatch();
  const checkLoggedIn = localStorage.getItem("pizUser");

  useEffect(() => {
    checkLoggedIn && dispatch({ type: "IS_LOGGED_IN", isLoggedIn: true });
  }, [checkLoggedIn, dispatch]);

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
        {isLoggedIn ? (
          <Route exact path="/">
            <AllPizzas />
          </Route>
        ) : (
          <Route exact path="/login">
            <LogIn />
          </Route>
        )}
      </Switch>
    </div>
  );
}

export default App;
