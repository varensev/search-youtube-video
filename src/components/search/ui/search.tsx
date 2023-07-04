import {FC} from 'react';
import styles from "./search.module.scss"
import {classNames} from "../../../shared/lib/class-names";
import {InputSearch} from "../../../shared/ui/components/input-search/input-search";
interface SearchProps {

}

const Search: FC<SearchProps> = () => {
    return (
        <div className={classNames(styles.Search,{} , ["container"])}>
            <p>Поиск видео</p>
            <InputSearch/>
        </div>
    );
};

export {Search};
