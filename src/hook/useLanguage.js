import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { languages } from "../utils/translate";

function useLanguage() {
  const { language } = useContext(LanguageContext);
  return (text) => languages[language][text] || text;
}

export default useLanguage;
