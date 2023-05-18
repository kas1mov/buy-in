import { ChanelIcon } from "../../assets/icon/icon";

export const FilterIstory = ({ filterValue, setFilterValue }) => {
  return (
    <div className="filter__istory">
      <div className="filter__istory__div">
        {filterValue.map((item) => (
          <div className="filter__istory__item">
            {item} <ChanelIcon />
          </div>
        ))}
        {filterValue.length ? (
          <button
            className="filter__istory__btn"
            onClick={() => setFilterValue([])}
          >
            Очистить все
          </button>
        ) : null}
      </div>
      <div className="filter__select__div">
        <select name="" id="" className="filter__select">
          <option value="1">Сортировать по</option>
        </select>
      </div>
    </div>
  );
};
