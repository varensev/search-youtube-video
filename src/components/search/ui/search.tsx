import {InputSearch} from "../../../shared/ui/components/input-search";
import {Content} from "../../content";
import {useGetMoviesByNameQuery} from "../../../store/api-query";
import {useState} from "react";

const Search = () => {
    const [searchItem, setSearchItem] = useState("");
    const {data, error, isLoading} = useGetMoviesByNameQuery(searchItem)

    return (
        <>
            <InputSearch setSearchItem={setSearchItem} searchItem={searchItem}/>
            {data && <Content youTubeSearchList={data.items} searchItem={searchItem}/>}
        </>
    );
};

export {Search};


