import React, {FC} from 'react';
import styles from "./content-header.module.scss"
import {ICON} from "../../../assets/icons/icons_grid_flex";


interface ContentHeaderProps {
    title: string
    count: number
    toggleFlex: () => void
    toggleGrid: () => void
    layoutMode: "flex" | "grid"
}

const ContentHeader: FC<ContentHeaderProps> = ({title, count, toggleFlex, toggleGrid, layoutMode}) => {
    const iconList = layoutMode === "flex" ? ICON.list : ICON.listBlack;
    const iconGrid = layoutMode === "grid" ? ICON.gridBlack : ICON.grid;

    return (
        <div className={styles.contentHeader}>
            <div className={styles.title}>
                <div style={{display: "flex"}}>
                    <p>Видео по запросу</p>
                    <p className={styles.titleName}>«{title}»</p>
                </div>
                <p className={styles.titleCount}>{count}</p>
            </div>


            <div className={styles.icons}>
                <img onClick={toggleFlex} src={iconList} alt="list" className={styles.iconList}/>
                <img onClick={toggleGrid} src={iconGrid} alt="grid"/>
            </div>
        </div>
    );
};

export {ContentHeader};
