import {createBrowserRouter, } from 'react-router-dom';
import {Auth} from "../../../../pages/auth";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Auth/>,
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
