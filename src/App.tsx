import './styles/App.scss';
import * as React from "react";
import {AppRouter} from "./providers/router/ui/app-router";

function App () {
    return (
        <div>
            <AppRouter/>
        </div>
    );
}
export default App;
