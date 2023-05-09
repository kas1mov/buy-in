import { SportKross } from "../companents/KrossComp/sportKross";
import { Filter } from "../companents/ProductFIlter/Filter";

export const Sport = () => {
  return (
    <div className="sport">
      <div className="container">
        <SportKross />
        <div className="sport__main">
          <Filter />
        </div>
      </div>
    </div>
  );
};
