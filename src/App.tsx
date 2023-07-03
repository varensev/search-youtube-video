import './styles/App.scss';
import  React , {Suspense} from "react";
import {AppRouter} from "./providers/router/ui/app-router";
import Loader from "./widget/loader/loader";


function App() {
    return (
        <div>
            <Suspense fallback={<Loader/>}>
                <AppRouter/>
            </Suspense>
        </div>
    );
}

export default App;
