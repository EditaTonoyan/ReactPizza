import './App.css';
import AllPizzas from './components/Header';
import Chart from './components/Chart';
import JoinUs from './components/JoinUs';
import LogIn from './components/LogIn';
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <AllPizzas />
                </Route>
                <Route exact path='/chart'>
                    <Chart />
                </Route>
                <Route exact path='/joinus'>
                    <JoinUs />
                </Route>
                {/* This route should be not acceptible when user logged in, wrap it into unprotectedRoute function (const UnprotectedSignIn = unprotectedRoute(LogIn)) see belowe */}
                <Route exact path='/login'>
                    <LogIn />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

// function unprotectedRoute(Component: ComponentType) {
//     return () => {
//         const [userLoggedIn, setUserLoggedIn] = useState(false);

//         useEffect(() => {
//             if (userLoggedIn) {
//                 history.push('/')
//             }
//         }, [userLoggedIn]);

//         return <Component />;
//     };
// }
