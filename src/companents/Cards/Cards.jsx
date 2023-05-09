import { NavLink } from "react-router-dom";
import {
  AgainBtnIcon,
  CheckIcon,
  FillStarIcon,
  StarIcon,
} from "../../assets/icon/icon";
import { dataCards } from "../../utils/data";

export const Cards = () => {
  return (
    <div className="Cards">
      <div className="cards">
        {dataCards
          .map((item) => (
            <NavLink className="card" to={"/product"} key={item.id}>
              <div className="card__hot">HOT</div>
              <div className="card__img">
                <img src={item.img} alt="" />
              </div>
              <div className="card__data">
                <div className="card__info">
                  <h2 className="card__title">{item.title}</h2>
                  <div className="card__starIcon">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <FillStarIcon />
                    <p className="card__starIcon_num">(31)</p>
                  </div>
                </div>
                <div className="card__text">
                  <CheckIcon /> в наличии
                </div>
                <div className="card__month">
                  <div className="card__month__sum">{item.month}</div>
                  <p className="card__month__text">в месяц</p>
                </div>
                <h1 className="card__sum">{item.summa}</h1>
              </div>
            </NavLink>
          ))
          .splice(0, 5)}
      </div>
      <button className="card__btn">
        <AgainBtnIcon /> Показать еще
      </button>
    </div>
  );
};
