import {createBrowserRouter} from 'react-router-dom';
import {APP_ROUTER} from "../app-routes.constants";
import ErrorPage from "../../../../pages/error/error-page";
import {Main} from "../../../../pages/main";
import {Auth} from "../../../../pages/auth";


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

// export enum AppRoutes {
//     AUTH = 'AUTH',
//     MAIN = "MAIN"
// }
//
// export const RoutePath: Record<AppRoutes, string> = {
//     [AppRoutes.AUTH]: '/',
//     [AppRoutes.MAIN]: "/main"
// };
//
// export const routeConfig: Record<AppRoutes, RouteProps> = {
//     [AppRoutes.AUTH]: {
//         path: RoutePath[AppRoutes.AUTH],
//         element: <Auth/>,
//     },
//     [AppRoutes.MAIN]:{
//         path: RoutePath[AppRoutes.MAIN],
//         element: <div>das</div>
//     }
// };
//
// const AppRouter = () => {
//   return(
//       <Routes>
//           {Object.values(routeConfig).map(({element, path}) => (
//               <Route
//                   key={path}
//                   path={path}
//                   element={element}
//               />
//           ))}
//       </Routes>
//   )
// }
