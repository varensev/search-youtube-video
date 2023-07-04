import {FC} from 'react';
import {classNames} from "../../../shared/lib/class-names";
import styles from "./content.module.scss"
import {ContentHeader} from "../../../shared/ui/components/content-header/content-header";
import {Card} from "../../../shared/ui/components/content-card";

interface ContentProps {

}

type ObjectItem = {
    title: string;
    description: string;
    count: number;
    id: number;
};
const objectsArray: ObjectItem[] = [
    {
        title: "Как кормить кошку натуралкой | Перечень полезных для кош...  Как кормить кошку натуралкой | Перечень полезных для кош...Как кормить кошку натуралкой | Перечень полезных для кош...Как кормить кошку натуралкой | Перечень полезных для кош...Как кормить кошку натуралкой | Перечень полезных для кош...",
        description: "Ветеринария и Кормление соб... Ветеринария и Кормление соб...Ветеринария и Кормление соб...Ветеринария и Кормление соб...",
        count: 786,
        id: 1,
    },
    {
        title: "Заголовок 2",
        description: "Описание 2",
        count: 123,
        id: 2,
    },
    {
        title: "Заголовок 3",
        description: "Описание 3",
        count: 456,
        id: 3,
    },
    {
        title: "Заголовок 4",
        description: "Описание 4",
        count: 789,
        id: 4,
    },
    {
        title: "Заголовок 5",
        description: "Описание 5",
        count: 987,
        id: 5,
    },
    {
        title: "Заголовок 6",
        description: "Описание 6",
        count: 654,
        id: 6,
    },
    {
        title: "Заголовок 7",
        description: "Описание 7",
        count: 321,
        id: 7,
    },
    {
        title: "Заголовок 8",
        description: "Описание 8",
        count: 159,
        id: 8,
    },
];


const Content: FC<ContentProps> = () => {
    return (
        <div className={classNames(styles.content, {}, ["container"])}>
            <ContentHeader
                title={"чем кормить кота"}
                count={7230}/>
            <div className={styles.cardContent}>
                {objectsArray.map(({id, description, count, title}) => (
                        <Card
                            key={id}
                            title={title}
                            description={description}
                            count={count}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export {Content};
