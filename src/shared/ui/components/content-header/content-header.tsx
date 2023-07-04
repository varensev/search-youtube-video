import {FC} from 'react';
import styles from "./content-header.module.scss"
import iconList from "../../../assets/icons/content_list.svg";
import iconGrid from "../../../assets/icons/content_grid.svg";

interface ContentHeaderProps {
    title: string
    count: number
}

const ContentHeader: FC<ContentHeaderProps> = ({title,count}) => {
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
                <img src={iconList} alt="list" className={styles.iconList}/>
                <img src={iconGrid} alt="grid"/>
            </div>
        </div>
    );
};

export {ContentHeader};
