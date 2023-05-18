import { NavLink } from "react-router-dom";
import { dataKrossBrend, dataTovarNum } from "../../utils/data";
import { Title } from "../Title/title";
import useLanguage from "../../hook/useLanguage";

export const SportKross = () => {
  const translate = useLanguage()
  return (
    <div className="sportKross">
      <h2 className="sportKross__path">
        <Title />
      </h2>
      <div className="sportKross__title">
        <h1 className="sportKross__title__text">{translate("sportCross")}</h1>
        {dataTovarNum.map((item) => (
          <p className="sportKross__title__tovarNum" key={item.id}>
            {item.num} {translate("tovar")}
          </p>
        ))}
      </div>
      <div className="sportKross__brends">
        {dataKrossBrend.map((item) => (
          <NavLink to={item.path} className="sportKross__brend" key={item.id}>
            <p className="sportKross__brend__text">{item.text}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
