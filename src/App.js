import './App.css';
import AllPizzas from './components/AllPizzas';
import ContextAppProvider from './context/providers/ContextAppProvider';

function App() {
    return (
        <div>
            <ContextAppProvider>
                <AllPizzas />
            </ContextAppProvider>
        </div>
    );
}

export default App;
