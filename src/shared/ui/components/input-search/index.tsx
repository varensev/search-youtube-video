import {lazy} from "react";

export const InputSearch = lazy(() =>
    import('./ui/input-search').then((module) => ({ default: module.InputSearch }))
);
