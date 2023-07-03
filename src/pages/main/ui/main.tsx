import React from 'react';
import {useNavigate} from "react-router-dom";
import {APP_ROUTER} from "../../../providers/router/config/app-routes.constants";

const Main = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>Main PAGE</p>
            <button  onClick={() => navigate(APP_ROUTER.AUTH)}> кнопка</button>
        </div>
    );
};

export {Main};
