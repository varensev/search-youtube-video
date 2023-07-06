import {Header} from "../../../components/header";
import {Outlet} from "react-router-dom";

const Main = () => {

    return (
        <div>
            <Header/>
            <Outlet />
        </div>
    );
};

export {Main};
