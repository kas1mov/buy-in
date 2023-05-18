import { useState } from "react";
import { SportKross } from "../companents/KrossComp/sportKross";
import { Filter } from "../companents/ProductFIlter/Filter";
import { FilterIstory } from "../companents/FilterIstory/filterIstory";
import { SportCards } from "../companents/SportCards/sportCards";
// import { useSearchParams } from "react-router-dom";

export const Sport = () => {
  const [filterValue, setFilterValue] = useState([]);

  // const [search] = useSearchParams();

  // console.log(search.get("filter"), "search");
  return (
    <div className="sport">
      <div className="container">
        <SportKross />
        <div className="sport__main">
          <div className="sport__main__filter">
            <Filter setValue={setFilterValue} filterValue={filterValue} />
          </div>
          <div className="sport__main__card">
            <FilterIstory
              filterValue={filterValue}
              setFilterValue={setFilterValue}
            />
            <SportCards />
          </div>
        </div>
      </div>
    </div>
  );
};
