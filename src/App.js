import './App.css';
import AllPizzas from './components/AllPizzas';
// import Menu from './components/Menu';
import ContextAppProvider from './context/providers/ContextAppProvider';
// import MeatPizzas from '../src/components/MeatPizzas'
// import { Route, Switch } from 'react-router-dom';

// const router = [
//   {
//     path: "/",
//     component: AllPizzas,
//     exact: true
//   },
//   {
//     path: "/meat",
//     component: AllPizzas,
//     exact: true
//   }
// ]
function App() {
  return (
    <div >
      <ContextAppProvider>
        <AllPizzas />
      </ContextAppProvider>
      {/* <Switch>
        {
          router.map((page, index) => {
            return (
              <Route
                key={index}
                path={page.path}
                component={page.component}
                exact={page.exact}
              />
            )
          })
        }
      </Switch> */}

    </div>
  );
}

export default App;
