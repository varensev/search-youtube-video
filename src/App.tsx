import './styles/App.scss';
import { Provider } from 'react-redux';
import { AppRouter } from './providers/router/ui/app-router';
import { store } from './store/store';
import { Suspense } from 'react';

function App() {
    return (
        <div>
            <Provider store={store}>
                <Suspense fallback={<div>Loading...</div>}>
                    <AppRouter />

                </Suspense>
            </Provider>
        </div>
    );
}

export default App;
