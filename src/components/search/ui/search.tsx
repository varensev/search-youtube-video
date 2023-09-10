import { useState } from 'react';
import { InputSearch } from '../../../shared/ui/components/input-search';
import { Content } from '../../content';

export const Search = () => {
    const [searchItem, setSearchItem] = useState({value: "" , include: false});
    console.log(searchItem);
    return (
        <>
            <InputSearch setSearchItem={setSearchItem} />
            {searchItem.include && <Content searchItem={searchItem} />}
        </>
    );
};




