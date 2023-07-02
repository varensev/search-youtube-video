import React from 'react';
import {Form} from "../../components/form/form";
import styles from "./main.module.scss"
interface IMainProps {

}

const Main: React.FC<IMainProps> = () => {
    return (
        <div className={styles.container}>
            <Form/>
        </div>
    );
};

export {Main};
