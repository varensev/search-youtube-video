import './styles/App.scss';
import React, {Suspense} from "react";
import {AppRouter} from "./providers/router/ui/app-router";
import Loader from "./widget/loader/loader";
import {Provider} from "react-redux";
import {store} from "./store/store";


function App() {
    return (
        <div>
            <Provider store={store}>
                <Suspense fallback={<Loader/>}>
                    <AppRouter/>
                </Suspense>
            </Provider>
        </div>
    );
}

export default App;
