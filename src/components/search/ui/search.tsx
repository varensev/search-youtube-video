import { InputSearch } from "../../../shared/ui/components/input-search";
import { Content } from "../../content";

import { useState } from "react";


const Search = () => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <>
      <InputSearch setSearchItem={setSearchItem}/>
      {!!searchItem && <Content   searchItem={searchItem} />}
    </>
  );
};

export { Search };


