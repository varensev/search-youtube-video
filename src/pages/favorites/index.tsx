import {lazy} from "react";
export const Favorites = lazy(() =>
    import('./ui/favorites').then((module) => ({ default: module.Favorites }))
);
