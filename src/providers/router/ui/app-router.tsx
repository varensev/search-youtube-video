import * as React from "react";
import { RouterProvider} from 'react-router-dom';
import {router} from "../config/route-config/router-config";


export const AppRouter = () => (
    <RouterProvider router={router} />
);
