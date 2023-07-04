import {FC} from 'react';
import CardHover from "../../../../assets/icons/hover-card.svg"
import styles from "./card.module.scss"

interface CardProps {
    title: string;
    description: string;
    count: number;
}

const Card: FC<CardProps> = ({title, description, count}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <img src={CardHover} alt="card"/>
            </div>
            <div className={styles.descriptionContent}>
                <p className={styles.title}>{description}</p>
                <p className={styles.description}>{title}</p>
                <p className={styles.count}>{count} тыс. просмотров</p>
            </div>
        </div>
    );
};

export {Card};
