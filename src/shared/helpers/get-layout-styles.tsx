import {classNames} from "../lib/class-names";
interface Styles  {
    cardFlexColumn: string;
    cardFlexRow: string;
    cardContentFlexRow: string;
    descriptionContent: string;
    descriptionContentFlexRow: string;
}

export const getLayoutStyles = (layoutMode: string, styles: Styles) => {
    const isGrid = layoutMode === "grid";
    const layoutVue = isGrid
        ? styles.cardFlexColumn
        : classNames(styles.cardFlexRow, {} , [styles.cardContentFlexRow]);
    const descriptionContent = isGrid
        ? styles.descriptionContent
        : classNames(styles.descriptionContent, {} , [styles.descriptionContentFlexRow]);

    return {
        layoutVue,
        descriptionContent
    };
}
