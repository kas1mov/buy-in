import { Select } from "antd";
import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";

export const HeaderLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (value) => {
    localStorage.setItem("language", value);
    setLanguage(value);
  };

  return (
    <Select
      defaultValue="RU"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: "ru",
          label: "RU",
        },
        {
          value: "uz",
          label: "UZ",
        },
      ]}
    />
  );
};
