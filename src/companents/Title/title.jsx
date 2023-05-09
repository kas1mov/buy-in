import { Breadcrumb } from "antd";
const Title = () => (
  <Breadcrumb
    items={[
      {
        title: <a href="/">Главная</a>,
      },
      {
        title: <a href="/spotr">Спорт</a>,
      },
      {
        title: "Спортивные кроссовки",
      },
    ]}
  />
);
export default Title;
