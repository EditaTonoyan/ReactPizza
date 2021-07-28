import './App.css';
import AllPizzas from './components/AllPizzas';
import OrderedList from './components/OrderedList';
import { Route, Switch } from 'react-router-dom';


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

            </Switch>
        </div>
    );
}

export default App;
