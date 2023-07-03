import { lazy } from 'react';
// export const Auth = lazy(() => import('./auth'));

export const Auth = lazy(() =>
    import('./auth').then((module) => ({ default: module.Auth }))
);
