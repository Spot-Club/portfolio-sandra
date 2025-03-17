import React, { useContext, useState } from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./LanguageSwitch.scss";

const LanguageSwitch = () => {
  const { language, changeLanguage } = useContext(StyleContext);
  const [isChecked, setChecked] = useState(language === "fr");


  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          changeLanguage(language === "fr" ? "en" : "fr");
          setChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🇫🇷") : emoji("🇺🇸")}</span>
      </span>
    </label>
  );
};
export default LanguageSwitch;
