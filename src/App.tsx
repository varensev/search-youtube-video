import './styles/App.scss';
import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Main} from "./pages/main/main";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
    },
]);

function App () {

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}
export default App;
