import { Select } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
export const HeaderLanguage = () => (
  <Select
    defaultValue="UZ"
    style={{
      width: 120,
    }}
    onChange={handleChange}
    options={[
      {
        value: "uz",
        label: "UZ",
      },
      {
        value: "ru",
        label: "RU",
      },
    ]}
  />
);
