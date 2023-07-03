import { lazy } from 'react';
export const Main = lazy(() =>
    import('./ui/main').then((module) => ({ default: module.Main }))
);
