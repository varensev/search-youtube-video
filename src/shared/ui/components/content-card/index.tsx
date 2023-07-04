import {lazy} from "react";
export const Card = lazy(() =>
    import('./ui/card').then((module) => ({ default: module.Card }))
);
