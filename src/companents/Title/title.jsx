import { Breadcrumb } from "antd";
import useLanguage from "../../hook/useLanguage";

export const Title = () => {
  const translate = useLanguage();
  return (
    <Breadcrumb
      items={[
        {
          title: <a href="/">{translate("Glavniy")}</a>,
        },
        {
          title: <a href="/spotr">{translate("sport")}</a>,
        },
        {
          title: <p>{translate("sportCross")}</p>,
        },
      ]}
    />
  );
};
