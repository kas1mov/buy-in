// import { useSearchParams } from "react-router-dom";
import { VectorIcon } from "../../assets/icon/icon";
import useLanguage from "../../hook/useLanguage";
import { dataBrendName, dataColor } from "../../utils/data";

export const Filter = ({ setValue, filterValue }) => {
  const translate = useLanguage();

  // const [searchParams,setSearchParams] = useSearchParams

  const handlyBrand = (name) => {
    setValue([...filterValue, name]);
  };

  const handlyBrandSize = (size) => {
    setValue([...filterValue, size]);
  };
  return (
    <div className="filter">
      <div className="delivery">
        <div className="filter__title">
          <h2 className="filter__title__text">{translate("srok")}</h2>
          <button className="filter__title__btn">
            <VectorIcon />
          </button>
        </div>
        <div className="filter__inputs">
          <label className="filter__inputs__item">
            <input type="radio" />
            <span className="filter__inputs__text">Неважно</span>
          </label>
        </div>
      </div>
      <div className="filter__brend">
        <div className="filter__title">
          <h2 className="filter__title__text">{translate("brend")}</h2>
          <button className="filter__title__btn">
            <VectorIcon />
          </button>
        </div>
        <div className="filter__brend__inputs">
          {dataBrendName.map((item) => (
            <label
              className="filter__brend__inputs__item"
              key={item.id}
              onChange={() => handlyBrand(item.name)}
            >
              <input type="checkbox" name="check" id="" />
              <span className="filter__inputs__text">{item.name}</span>
            </label>
          ))}
          <button className="filter__all">{translate("barcha")}</button>
        </div>
      </div>
      <div className="filter__brend">
        <div className="filter__title">
          <h2 className="filter__title__text">{translate("razmer")}</h2>
          <button className="filter__title__btn">
            <VectorIcon />
          </button>
        </div>
        <div className="filter__brend__inputs">
          {dataBrendName.map((item) => (
            <label
              className="filter__brend__inputs__item"
              key={item.id}
              onClick={() => handlyBrandSize(item.size)}
            >
              <input type="checkbox" name="check" id="check__all" />
              <span className="filter__inputs__text">{item.size}</span>
            </label>
          ))}
          <button className="filter__all">{translate("barcha")}</button>
        </div>
      </div>
      <div className="filter__color">
        <div className="filter__title">
          <h2 className="filter__title__text">{translate("color")}</h2>
          <button className="filter__title__btn">
            <VectorIcon />
          </button>
        </div>
        <div className="filter__color__div">
          {dataColor.map((item) => (
            <div
              key={item.id}
              style={{
                background: item.color,
                width: "26px",
                height: "26px",
                borderRadius: "50%",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
