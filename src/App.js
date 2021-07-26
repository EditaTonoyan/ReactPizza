import './App.css';
import AllPizzas from './components/AllPizzas';
import OrderedList from './components/OrderedList';
import { Route, Switch } from 'react-router-dom';

const router = [
    {
        path: "/",
        component: AllPizzas,
        exact: true
    },
    {
        path: "/ordered",
        component: OrderedList,
        exact: true
    }
]

function App() {
    const pages = router.map((page, index) => {
        return (
          <Route
            key={index}
            path={page.path}
            component={page.component}
            exact={page.exact}
          />
        )
    })
    return (
        <div>
            <Switch>
                {pages}
            </Switch>
        </div>
    );
}

export default App;
