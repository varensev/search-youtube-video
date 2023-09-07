import { FC } from 'react';
import styles from './card.module.scss';
import { getLayoutStyles } from '../../../../helpers/get-layout-styles';

interface CardProps {
    title: string;
    description: string;
    count: number;
    layoutMode: 'flex' | 'grid';
    url: string;
}

const STYLES = {
    cardFlexColumn: styles.cardFlexColumn,
    cardFlexRow: styles.cardFlexRow,
    cardContentFlexRow: styles.cardContentFlexRow,
    descriptionContent: styles.descriptionContent,
    descriptionContentFlexRow: styles.descriptionContentFlexRow,
}

const Card: FC<CardProps> = ({ title, description, count, layoutMode, url }) => {
    const { layoutVue, descriptionContent } = getLayoutStyles(layoutMode, STYLES);


    return (
        <div className={layoutVue}>
            <div className={styles.cardContent}>
                <img src={url} alt='card' />
            </div>
            <div className={styles.descriptionContent}>
                <p className={styles.title}>{description}</p>
                <p className={styles.description}>{title}</p>
                <p className={styles.count}>{count} тыс. просмотров</p>
            </div>
        </div>
    );
};

export { Card };
