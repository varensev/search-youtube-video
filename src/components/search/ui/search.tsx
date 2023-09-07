import { useState } from 'react';
import { InputSearch } from '../../../shared/ui/components/input-search';
import { Content } from '../../content';

export const Search = () => {
    const [searchItem, setSearchItem] = useState('');
    return (
        <>
            <InputSearch setSearchItem={setSearchItem} />
            {!!searchItem && <Content searchItem={searchItem} />}
        </>
    );
};




