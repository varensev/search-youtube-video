import {lazy} from "react";
export const Content = lazy(() =>
    import('./ui/content').then((module) => ({ default: module.Content }))
);
