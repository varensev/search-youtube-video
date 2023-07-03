import React from 'react';
import {Form} from "../../../components/form/form";
import styles from "./auth.module.scss"

const Auth = () => {
    return (
        <div className={styles.container}>
            <Form/>
        </div>
    );
};

export {Auth};
