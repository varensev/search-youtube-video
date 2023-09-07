import { FC } from 'react';
import { classNames } from '../../../shared/lib/class-names';
import styles from './content.module.scss';
import { ContentHeader } from '../../../shared/ui/components/content-header/content-header';
import { Card } from '../../../shared/ui/components/content-card';
import { useLayoutToggle } from '../../../hooks/use-layout-toggle';
import { useGetMoviesByNameQuery } from '../../../store/api-query';


interface ContentProps {
    searchItem: string;
}

// TODO: добавить isLoading , error , первый рендер
const Content: FC<ContentProps> = ({ searchItem }) => {
    const { toggleGrid, toggleFlex, layoutMode } = useLayoutToggle();
    const { data, error, isLoading } = useGetMoviesByNameQuery(searchItem);
    const layoutVue = layoutMode === 'grid' ? styles.cardContent : '';

    return (
        <div className={classNames(styles.content, {}, ['container'])}>
            {
                data && (
                    <>
                        <ContentHeader
                            title={searchItem}
                            count={data.items?.length ?? 100}
                            toggleGrid={toggleGrid}
                            toggleFlex={toggleFlex}
                            layoutMode={layoutMode}
                        />
                        <div className={layoutVue}>
                            {data.items?.map(({ id, snippet }) => (
                                    <Card
                                        key={id.videoId}
                                        title={snippet.title}
                                        description={snippet.description}
                                        count={200}
                                        url={snippet.thumbnails.high.url}
                                        layoutMode={layoutMode}
                                    />
                                ),
                            )}
                        </div>
                    </>
                )
            }
        </div>
    );
};

export { Content };
