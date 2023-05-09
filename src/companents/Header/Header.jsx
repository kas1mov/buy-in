import { NavLink } from "react-router-dom";
import {
  BasketIcon,
  FavoritesIcon,
  LocationIcon,
  MenuIcon,
  OrderIcon,
  RegistrationIcon,
  SearchIcon,
} from "../../assets/icon/icon";
import { HeaderLanguage } from "./HeaderLanguage";
import BuyInLogo from "../../assets/image/BuyIn.png";
import { Button } from "antd";
import { useState } from "react";
import { AppDrawer } from "../Drawer/drawer";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [placemen, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <div className="Header">
      <div className="Header__top">
        <div className="Header__container">
          <div className="Header__top__map">
            <div className="Header__top__installment">0% Рассрочка</div>
            <p className="Header__top__map_text">Пункт выдачи</p>
            <NavLink
              to={"https://goo.gl/maps/Fv1s4aejfYPAao998"}
              className="Header__top__map_location"
            >
              <LocationIcon />
              <p className="Header__top__map_location__text">г.Ургенч</p>
            </NavLink>
          </div>
          <div className="Header__top__questions">
            <NavLink to={"/questions"} className="Header__top__questions_text">
              Часто задаваемые вопросы
            </NavLink>
            <button className="Header__top__questions_btn">
              Заказать звонок
            </button>
            <div className="Header__top_language">
              <HeaderLanguage />
            </div>
          </div>
        </div>
      </div>
      <div className="Header__bottom">
        <div className="Header__container">
          <NavLink to={"/"} className="Header__bottom__logo">
            <img src={BuyInLogo} alt="LogoBuyIn" />
          </NavLink>
          <div className="Header__bottom__btns">
            <Button
              type="primary"
              onClick={showDrawer}
              className="Header__bottom__menu"
            >
              <MenuIcon />
              <p>Категории</p>
            </Button>
            <AppDrawer open={open} onClose={onClose} />
            <div className="Header__bottom__search">
              <input
                type="text"
                placeholder="Введите запрос..."
                className="Header__bottom__search_input"
              />
              <button className="Header__bottom__search_btn">
                <SearchIcon />
              </button>
            </div>
          </div>
          <div className="Header__bottom__baskets">
            <NavLink to={"/order"} className="Header__bottom__order">
              <OrderIcon />
              <p>Мои заказы</p>
            </NavLink>
            <NavLink to={"/favorites"} className="Header__bottom__favorites">
              <FavoritesIcon />
              <p>Избранное</p>
            </NavLink>
            <NavLink to={"/basket"} className="Header__bottom__basket">
              <BasketIcon />
              <p>Корзина</p>
            </NavLink>
            <button className="Header__bottom__registration">
              <RegistrationIcon />
              <p>Регистрация</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
