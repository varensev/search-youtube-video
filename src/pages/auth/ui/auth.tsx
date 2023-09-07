import React from 'react';
import { Form } from '../../../components/form/form';
import styles from './auth.module.scss';

export const Auth = () => {
    return (
        <div className={styles.container}>
            <Form />
        </div>
    );
};
