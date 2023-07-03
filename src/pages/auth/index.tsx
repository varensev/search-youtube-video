import { lazy } from 'react';
export const Auth = lazy(() =>
    import('./ui/auth').then((module) => ({ default: module.Auth }))
);
