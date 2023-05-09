import { VectorIcon } from "../../assets/icon/icon";
import { dataBrendName } from "../../utils/data";

export const Filter = () => {
  return (
    <div className="filter">
      <div className="delivery">
        <div className="filter__title">
          <h2 className="filter__title__text">Срок доставки</h2>
          <button className="filter__title__btn">
            <VectorIcon />
          </button>
        </div>
        <div className="filter__inputs">
          <label className="filter__inputs__item">
            <input type="radio" />
            <span className="filter__inputs__text">Неважно</span>
          </label>
          <label className="filter__inputs__item">
            <input type="radio" />
            <span className="filter__inputs__text">От 1 дней</span>
          </label>
          <label className="filter__inputs__item">
            <input type="radio" />
            <span className="filter__inputs__text">От 1 дней</span>
          </label>
          <label className="filter__inputs__item">
            <input type="radio" />
            <span className="filter__inputs__text">От 1 дней</span>
          </label>
        </div>
      </div>
      <div className="filter__brend">
        <div className="filter__title">
          <h2 className="filter__title__text">Бренд</h2>
          <button className="filter__title__btn">
            <VectorIcon />
          </button>
        </div>
        <div className="filter__brend__inputs">
          {dataBrendName.map((item) => (
            <label className="filter__brend__inputs__item" key={item.id}>
              <input type="checkbox" name="check" id="" />
              <span className="filter__inputs__text">{item.name}</span>
            </label>
          ))}
          <p className="filter__all">Показать все</p>
        </div>
      </div>
      <div className="filter__brend">
        <div className="filter__title">
          <h2 className="filter__title__text">Размер</h2>
          <button className="filter__title__btn">
            <VectorIcon />
          </button>
        </div>
        <div className="filter__brend__inputs">
          {dataBrendName.map((item) => (
            <label className="filter__brend__inputs__item" key={item.id}>
              <input type="checkbox" name="check" id="" />
              <span className="filter__inputs__text">{item.size}</span>
            </label>
          ))}
          <p className="filter__all">Показать все</p>
        </div>
      </div>
    </div>
  );
};
