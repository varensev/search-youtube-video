import './styles/App.scss';
import { Provider } from 'react-redux';
import { AppRouter } from './providers/router/ui/app-router';
import { store } from './store/store';

function App() {
    return (
        <div>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </div>
    );
}

export default App;
