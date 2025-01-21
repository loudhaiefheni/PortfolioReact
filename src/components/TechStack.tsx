import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  skillsDataCMS,
  skillsDataDesign,
  skillsDataDevOps,
  skillsDataWeb,
} from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { useTheme } from "../context/theme-context";
import RadialGradient from "./RadialGradient";
import SkillSection from "./SkillSection";

const TechStack: React.FC = () => {
  const { ref } = useSectionInView("Skills");
  const { theme } = useTheme();
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <React.Fragment>
      <section
        className="relative tech-stack max-lg:p-16 "
        id="skills"
        ref={ref}
      >
        <RadialGradient
          scale="scale-y-[3]"
          opacity={theme === "light" ? "opacity-30" : "opacity-30"}
          position="top-[55rem]"
        />
        <div className="title-container flex flex-col justify-center items-center p-32 w-1/2   gap-6 min-[1921px]:px-[55rem] max-lg:p-0  max-lg:w-full max-lg:items-start max-lg:py-16 ">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
            }}
          >
            <p className="font-black mb-6">
              <span className="text-[--orange]">&lt;</span>{language === "FR"
                ? "Compétences"
                : "Skills"}
              <span className="text-[--orange]">/&gt;</span>
            </p>
            <h2>
              {language === "FR"
                ? "Mon stack technologique et mes compétences"
                : "My TechStack and Skills"}
            </h2>
          </motion.div>
        </div>
        <div className="flex gap-40 justify-center max-lg:flex-col">
          <div className="w-1/3 max-lg:w-full">
            <SkillSection skillsData={skillsDataWeb} theme={theme} />
          </div>
          <div className="flex flex-col h-[inherit] justify-around max-lg:gap-40">
            <SkillSection skillsData={skillsDataDevOps} theme={theme} />
            <hr className="my-8 border-t-2 border-gray-300 max-lg:my-6" />
            <SkillSection skillsData={skillsDataDesign} theme={theme} />
            <hr className="my-8 border-t-2 border-gray-300 max-lg:my-6" />
            <SkillSection skillsData={skillsDataCMS} theme={theme} />
          </div>
        </div>
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          zIndex: 10,
          backgroundColor: "var(--orange)",
        }}
      />
    </React.Fragment>
  );
};

export default TechStack;
