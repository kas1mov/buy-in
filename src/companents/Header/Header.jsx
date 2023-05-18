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
import useLanguage from "../../hook/useLanguage";

export const Header = () => {
  const translate = useLanguage();
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
            <div className="Header__top__installment">
              0% {translate("tolov")}
            </div>
            <p className="Header__top__map_text">{translate("muammo")}</p>
            <NavLink
              to={"https://goo.gl/maps/Fv1s4aejfYPAao998"}
              className="Header__top__map_location"
            >
              <LocationIcon />
              <p className="Header__top__map_location__text">{translate("urgench")}</p>
            </NavLink>
          </div>
          <div className="Header__top__questions">
            <NavLink to={"/questions"} className="Header__top__questions_text">
             {translate("savollar")}
            </NavLink>
            <button className="Header__top__questions_btn">
              {translate("qongiroq")}
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
              <p>{translate("katalog")}</p>
            </Button>
            <AppDrawer open={open} onClose={onClose} />
            <div className="Header__bottom__search">
              <input
                type="text"
                placeholder={translate("qidiruv")}
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
              <p>{translate("zakaz")}</p>
            </NavLink>
            <NavLink to={"/favorites"} className="Header__bottom__favorites">
              <FavoritesIcon />
              <p>{translate("sevimlilar")}</p>
            </NavLink>
            <NavLink to={"/basket"} className="Header__bottom__basket">
              <BasketIcon />
              <p>{translate("savat")}</p>
            </NavLink>
            <button className="Header__bottom__registration">
              <RegistrationIcon />
              <p>{translate("reg")}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
