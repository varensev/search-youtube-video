import {createBrowserRouter, } from 'react-router-dom';
import {APP_ROUTER} from "../app-routes.constants";

import ErrorPage from "../../../../pages/error/error-page";
import {Main} from "../../../../pages/main/index";
import {Auth} from "../../../../pages/auth/index";


export const router = createBrowserRouter([
    {
        path: APP_ROUTER.ROOT,
        element: <Main/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: APP_ROUTER.children,
                element: <div>children component</div>,
            },
        ],
    },
    {
        path: APP_ROUTER.AUTH,
        element: <Auth />
    },
]);

// TODO: in progress
// import { Auth } from 'pages/auth/auth';  type RouteProps
// import * as React from "react";
//
// export enum AppRoutes {
//     AUTH = 'AUTH',
// }
//
// export const RoutePath: Record<AppRoutes, string> = {
//     [AppRoutes.AUTH]: '/',
// };
//
// export const routeConfig: Record<AppRoutes, RouteProps> = {
//     [AppRoutes.AUTH]: {
//         path: RoutePath[AppRoutes.AUTH],
//         element: <Auth/>,
//     }
// };
