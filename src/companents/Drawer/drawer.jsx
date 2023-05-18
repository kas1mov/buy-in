import { Drawer } from "antd";
import { NavLink } from "react-router-dom";
import { dataMenu } from "../../utils/data";
import useLanguage from "../../hook/useLanguage";

export const AppDrawer = ({ open, onClose }) => {
  const translate = useLanguage();
  return (
    <>
      <Drawer placement="left" closable={false} onClose={onClose} open={open}>
        <div className="menu">
          {dataMenu.map((item) => (
            <NavLink to={item.path} key={item.id} className="menu__item">
              {item.icon}
              <h1 className="menu__title">{translate(item.title)}</h1>
            </NavLink>
          ))}
        </div>
      </Drawer>
    </>
  );
};
