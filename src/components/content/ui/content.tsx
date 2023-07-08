import {FC} from 'react';
import {classNames} from "../../../shared/lib/class-names";
import styles from "./content.module.scss"
import {ContentHeader} from "../../../shared/ui/components/content-header/content-header";
import {Card} from "../../../shared/ui/components/content-card";
import {useLayoutToggle} from "../../../hooks/use-layout-toggle";
import { YouTubeSearchResult} from "../../../store/types";


interface ContentProps {
    youTubeSearchList?: YouTubeSearchResult[]
    searchItem: string
}

const Content: FC<ContentProps> = ({youTubeSearchList, searchItem}) => {
    const {toggleGrid, toggleFlex, layoutMode} = useLayoutToggle()
    const  layoutVue = layoutMode === "grid" ? styles.cardContent : ""

    return (
        <div className={classNames(styles.content, {}, ["container"])}>
            <ContentHeader
                title={searchItem}
                count={youTubeSearchList?.length ?? 100}
                toggleGrid={toggleGrid}
                toggleFlex={toggleFlex}
                layoutMode={layoutMode}
            />
            <div className={layoutVue}>
                {youTubeSearchList?.map(({id, snippet}) => (
                        <Card
                            key={id.videoId}
                            title={snippet.title}
                            description={snippet.description}
                            count={200}
                            url={snippet.thumbnails.high.url}
                            layoutMode={layoutMode}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export {Content};
