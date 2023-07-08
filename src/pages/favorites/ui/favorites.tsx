import React from 'react';
import {ContentFavorites} from "./content-favorites";
import styles from "./style.favorites.module.scss"
import {classNames} from "../../../shared/lib/class-names";

const title = [{
    title: "dasdasd",
    key: 1
},
    {
        title: "Dasdadad",
        key: 2
    }]

const Favorites = () => {
    return (
        <div className={classNames(styles.favorites, {}, ["container"])}>
            <h2>Избранное</h2>
            <ContentFavorites title={title}/>
        </div>
    );
};

export {Favorites};
