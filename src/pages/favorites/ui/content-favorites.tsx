import {FC} from 'react';
import styles from "./style.favorites.module.scss"

interface Title {
    title: string
    key: number | string
}

interface ContentFavoritesProps {
    title: Title[]
}

const ContentFavorites: FC<ContentFavoritesProps> = ({title}) => {
    return (
        <div className={styles.contentFavorites}>
            {title.map(item => <p key={item.key}>{item.title}</p>)}
        </div>
    );
};

export {ContentFavorites};
