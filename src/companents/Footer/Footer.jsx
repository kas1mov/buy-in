import { NavLink } from "react-router-dom";
import { dataFooter } from "../../utils/data";
import Google from "../../assets/image/Google.png";
import AppStore from "../../assets/image/App Store.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__menu_one">
            <p className="footer__menu__title">Lorem inpus</p>
            {dataFooter.map((item) => (
              <NavLink to={item.path} className="footer__menu" key={item.id}>
                <p className="footer__menu__text">{item.text}</p>
              </NavLink>
            ))}
          </div>
          <div className="footer__menu_two">
            <div className="footer__menu">
              <p className="footer__menu__title">Lorem inpus</p>
              {dataFooter
                .map((item) => (
                  <NavLink
                    to={item.path}
                    className="footer__menu__item"
                    key={item.id}
                  >
                    <p className="footer__menu__text">{item.text}</p>
                  </NavLink>
                ))
                .slice(0, 2)}
            </div>
            <div className="footer__menu">
              <p className="footer__menu__title">Lorem inpus</p>
              {dataFooter
                .map((item) => (
                  <NavLink
                    to={item.path}
                    className="footer__menu__item"
                    key={item.id}
                  >
                    <p className="footer__menu__text">{item.text}</p>
                  </NavLink>
                ))
                .slice(0, 2)}
            </div>
          </div>
          <div className="footer__menu_one">
            <p className="footer__menu__title">Lorem inpus</p>
            {dataFooter.map((item) => (
              <NavLink to={item.path} className="footer__menu" key={item.id}>
                <p className="footer__menu__text">{item.text}</p>
              </NavLink>
            ))}
          </div>
          <div className="footer__menu_three">
            <p className="footer__menu__title">Lorem inpus</p>
            {dataFooter
              .map((item) => (
                <NavLink to={item.path} className="footer__menu" key={item.id}>
                  <p className="footer__menu__text">{item.text}</p>
                </NavLink>
              ))
              .slice(0, 2)}
          </div>
          <div className="footer__btns">
            <p className="footer__btns__title">Available on</p>
            <NavLink to={"https://play.google.com/store/games?hl=ru&gl=US"} className="footer__btn">
              <img src={Google} alt="" className="footer__btn_img" />
            </NavLink>
            <NavLink to={"https://www.apple.com/app-store/"} className="footer__btn">
              <img src={AppStore} alt="" className="footer__btn_img" />
            </NavLink>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__bottom_text">
            2022 - BuyIn - The most famous e-commerce website <br /> in
            Uzbekistan since in 2022
          </p>
        </div>
      </div>
    </div>
  );
};
