import React from "react";
import { BsMouse } from "react-icons/bs";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { useTheme } from "../context/theme-context";
import RadialGradient from "./RadialGradient";

const HeaderIntro: React.FC = () => {
  const { language } = useLanguage();
  const { ref } = useSectionInView("Home", 0.5);
  const { theme } = useTheme();

  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
      ref={ref}
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      <img
        src={headerIntroData.profilepicture}
        alt={headerIntroData.profilepicture}
        className="w-1/6 drop-shadow-2xl rounded-full shadow-2xl avatar-img max-lg:w-3/4"
      />
      <h1 className="text-center max-lg:text-xl">
        {language === "FR"
          ? headerIntroData.title.fr
          : headerIntroData.title.en}
        <span className="wave text-7xl">&#128075;&#127997;</span>
      </h1>
      <h2
        className={`text-center max-lg:text-lg text-transparent ${
          theme === "dark"
            ? "bg-gradient-to-r from-lightblue to-orange"
            : "bg-clip-text bg-gradient-to-r from-lightblue to-orange" 
        }`}
      >
        {language === "FR"
          ? headerIntroData.subtitle.fr
          : headerIntroData.subtitle.en}
      </h2>
      <p className="w-1/2 text-center max-lg:hidden">
        {language === "FR"
          ? headerIntroData.description.fr
          : headerIntroData.description.en}
      </p>
      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem]" />
      </div>
    </section>
  );
};

export default HeaderIntro;
