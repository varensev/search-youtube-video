import {FC} from 'react';
import CardHover from "../../../../assets/icons/hover-card.svg"
import styles from "./card.module.scss"
import {getLayoutStyles} from "../../../../helpers/get-layout-styles";

interface CardProps {
    title: string;
    description: string;
    count: number;
    layoutMode: "flex" | "grid";
}

const {
    cardFlexColumn,
    cardFlexRow,
    cardContentFlexRow,
    descriptionContent,
    descriptionContentFlexRow
} = styles;

const STYLE = {
    cardFlexColumn,
    cardFlexRow,
    cardContentFlexRow,
    descriptionContent,
    descriptionContentFlexRow
};

const Card: FC<CardProps> = ({title, description, count, layoutMode}) => {
    const { layoutVue, descriptionContent } = getLayoutStyles(layoutMode, STYLE);

    return (
        <div className={layoutVue}>
            <div className={styles.cardContent}>
                <img src={CardHover} alt="card"/>
            </div>
            <div className={descriptionContent}>
                <p className={styles.title}>{description}</p>
                <p className={styles.description}>{title}</p>
                <p className={styles.count}>{count} тыс. просмотров</p>
            </div>
        </div>
    );
};

export {Card};
