import { FC } from 'react';
import { classNames } from '../../../shared/lib/class-names';
import styles from './content.module.scss';
import { ContentHeader } from '../../../shared/ui/components/content-header/content-header';
import { Card } from '../../../shared/ui/components/content-card';
import { useLayoutToggle } from '../../../hooks/use-layout-toggle';
import { useGetMoviesByNameQuery } from '../../../store/api-query';
import { Grid } from '@mantine/core';

interface ContentProps {
    searchItem: {value: string};
}

const Content: FC<ContentProps> = ({ searchItem }) => {
    const { toggleGrid, toggleFlex, layoutMode } = useLayoutToggle();
    const { data, error, isLoading } = useGetMoviesByNameQuery(searchItem.value);
    const layoutVue = layoutMode === 'grid' ? styles.cardContent : '';
    console.log(layoutVue, "layoutVue");

    if (!data) {
        return null;
    }
    return (
        <div className={classNames(styles.content, {}, ['container'])}>

            <ContentHeader
                title={searchItem.value}
                count={data.items?.length ?? 100}
                toggleGrid={toggleGrid}
                toggleFlex={toggleFlex}
                layoutMode={layoutMode}
            />
            {/*<div className={layoutVue}>*/}

            {isLoading && <div>Loading...</div>}
            <Grid>
                {data.items?.map(({ id, snippet }) => (
                        <Grid.Col span={3} key={id.videoId}>
                            <Card
                            title={snippet.title}
                            description={snippet.description}
                            url={snippet.thumbnails.high.url}
                            layoutMode={layoutMode}
                        />
                        </Grid.Col>
                    ),
                )}
            </Grid>
            {/*</div>*/}

        </div>
    );
};

export { Content };
