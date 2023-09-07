import {createBrowserRouter} from 'react-router-dom';
import {APP_ROUTER} from "../app-routes.constants";
import ErrorPage from "../../../../pages/error/error-page";
import {Main} from "../../../../pages/main";
import {Auth} from "../../../../pages/auth";
import {Favorites} from "../../../../pages/favorites";
import {Search} from "../../../../components/search";


export const router = createBrowserRouter([
    {
        path: APP_ROUTER.ROOT,
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: APP_ROUTER.favorites,
                element: <Favorites/>,
            },
            {
                path: APP_ROUTER.search,
                element: <Search/>,
            },
        ],
    },
    {
        path: APP_ROUTER.LOGIN,
        element: <Auth/>,
    }
]);
