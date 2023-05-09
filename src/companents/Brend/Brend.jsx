import { AgainBtnIcon } from "../../assets/icon/icon";
import { dataBrend } from "../../utils/data";

export const Brend = () => {
  return (
    <div className="Brends">
      <div className="Brend">
        {dataBrend.map((item) => (
          <div className="Brend__item" key={item.id}>
            <div className="Brend__img">
              <img src={item.img} alt="" />
            </div>
            <h1 className="Brend__title">{item.title}</h1>
          </div>
        ))}
      </div>
      <button className="card__btn">
        <AgainBtnIcon /> Показать еще
      </button>
    </div>
  );
};
