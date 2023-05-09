// import MerryChristmas from "../../assets/image/MerryChristmas.png";\
import rek from "../../assets/image/borderRed.jpg";
import MerryChristmas from "../../assets/image/MerryChristmas.png";
import rekImg from "../../assets/image/illustration-of-folk-seamless-pattern-ornament_1217-1334 1.png";
import rek2Img from "../../assets/image/realistic-set-of-wrapped-christmas-gift-boxes-with-colorful-ribbons-and-bows-isolated_1284-33234 1.png";

export const Advertising = () => {
  return (
    <div className="Advertising">
      <div className="Advertising__div">
        <img src={rek} alt="" />
        <h1 className="Advertising__text">Товары для нового года</h1>
      </div>
      <div className="Advertising__imgs">
        <div className="Advertising__imgs__top">
          <img src={MerryChristmas} alt="" />
          <img src={rekImg} alt="" />
        </div>
        <div className="Advertising__imgs__bottom">
          <img src={rek2Img} alt="" />
          <img src={rekImg} alt="" />
        </div>
      </div>
      <div className="Advertising__div">
        <img src={rek} alt="" />
        <h1 className="Advertising__text">Товары для нового года</h1>
      </div>
    </div>
  );
};
