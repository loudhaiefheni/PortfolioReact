import React from "react";
import { buttonLabels } from "../assets/lib/data";
import { useLanguage } from "../context/language-context";

const LanguageSwitch: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <React.Fragment>
      <div className="language-switch-container">
        <input
          className="tgl tgl-style"
          id="toggle-language"
          type="checkbox"
          onChange={toggleLanguage}
          checked={language === "EN"}
        />
        <label
          className="tgl-btn"
          htmlFor="toggle-language"
          data-tg-off={buttonLabels.language.fr}
          data-tg-on={buttonLabels.language.en}
        ></label>
      </div>
    </React.Fragment>
  );
};

export default LanguageSwitch;
