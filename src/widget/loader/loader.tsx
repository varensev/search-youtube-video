import styles from "./style.module.scss"
import React from 'react';
import {classNames} from "../../shared/lib/class-names";

function Loader() {
    return (
        <div className={styles.loader}>
            <div className={classNames(styles.item, {}, [styles[styles.top]])}/>
            <div className={classNames(styles.item, {}, [styles[styles.left]])}/>
            <div className={classNames(styles.item, {}, [styles[styles.right]])}/>
            <div className={classNames(styles.item, {}, [styles[styles.bottom]])}/>
        </div>
    );
}

export default Loader;
