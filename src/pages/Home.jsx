import { Advertising } from "../companents/ Advertising/ Advertising";
import { Brend } from "../companents/Brend/Brend";
import { Cards } from "../companents/Cards/Cards";
import Swipper from "../companents/Swipper/Swipper";
import { dataCommodity } from "../utils/data";
import HperX from "../assets/image/Frame 19.png";
import SamRek from "../assets/image/Frame 20.png";

export const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="Home__swiper">
          <Swipper />
        </div>
        <div className="Home__product">
          {dataCommodity.map((item) => (
            <div className="Home__product__card" key={item.id}>
              <div className="Home__product__text">
                <h1 className="Home__product__title">{item.title}</h1>
                <p className="Home__product_text">{item.text}</p>
              </div>
              <div className="Home__product__img">
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="Home__trend">
          <div className="Home__product__name">В Тренде</div>
          <div className="Home_cards">
            <Cards />
          </div>
        </div>
        <div className="Rec_div">
          <Advertising />
        </div>
        <div className="Home__skidka">
          <div className="Home__product__name">Распродажа</div>
          <div className="Home_cards">
            <Cards />
          </div>
        </div>
        <div className="Home__Brend">
          <div className="Home__product__name">Бренды</div>
          <div className="Home__brend">
            <Brend />
          </div>
        </div>
        <div className="Home__skidka">
          <div className="Home__product__name">Распродажа</div>
          <div className="Home_cards">
            <Cards />
          </div>
        </div>
        <div className="Home__advertising__imgs">
          <img src={HperX} alt="" />
          <img src={SamRek} alt="" />
          <img src={HperX} alt="" />
        </div>
      </div>
    </div>
  );
};
