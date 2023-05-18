import { NavLink } from "react-router-dom";
import { dataKrossCards } from "../../utils/data";
import {
  AgainBtnIcon,
  CheckIcon,
  FillStarIcon,
  LikeIcon,
  StarIcon,
} from "../../assets/icon/icon";

export const SportCards = () => {
  return (
    <div className="sport__cards">
      {dataKrossCards.map((item) => (
        <NavLink className="sport__card" key={item.id} to={"/product"}>
          <button className="sport__card__btn">
            <LikeIcon />
          </button>
          <div className="sport__card__img__div">
            <img src={item.img} alt="" className="sport__card__img" />
          </div>
          <div className="sport__card__text__div">
            <h2 className="sport__card__title">{item.title}</h2>
            <div className="sport__card__icons">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <FillStarIcon />
              <p className="sport__card__icons__text">(31)</p>
            </div>
            <div className="sport__card__cash">
              <CheckIcon /> в наличии
            </div>
            <div className="sport__card__month__sum">
              <div className="sport__card__month">{item.month}</div>
              <p className="sport__card__month__text">в месяц</p>
            </div>
            <h1 className="sport__card__sum">{item.summa}</h1>
          </div>
        </NavLink>
      ))}
      <button className="card__btn">
        <AgainBtnIcon /> Показать еще
      </button>
    </div>
  );
};
