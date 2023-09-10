import { FC } from 'react';
import styles from './card.module.scss';
import { getLayoutStyles } from '../../../../helpers/get-layout-styles';
import { Card as CardUi, Image, Text, Badge, Button, Group, Container } from '@mantine/core';

interface CardProps {
    title: string;
    description: string;
    count?: number;
    layoutMode: 'flex' | 'grid';
    url: string;
}

const STYLES = {
    cardFlexColumn: styles.cardFlexColumn,
    cardFlexRow: styles.cardFlexRow,
    cardContentFlexRow: styles.cardContentFlexRow,
    descriptionContent: styles.descriptionContent,
    descriptionContentFlexRow: styles.descriptionContentFlexRow,
};

const Card: FC<CardProps> = ({ title, description, count, layoutMode, url }) => {
    const { layoutVue, descriptionContent } = getLayoutStyles(layoutMode, STYLES);

    return (
        <CardUi shadow='sm' padding='lg' radius='md' withBorder>
            <CardUi.Section>
                <Image
                    src={url}
                    height={160}
                    alt='Norway'
                />
            </CardUi.Section>

            <Text lineClamp={1} size='sm' weight={500} mt={'md'}>
                {description || '!description '}
            </Text>
            <Text lineClamp={1} color='dimmed' size='md'>
                {title}
            </Text>
            {/*<p className={styles.count}>{count} тыс. просмотров</p>*/}
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Добавить в избранное
            </Button>

        </CardUi>

    );
};

export { Card };
