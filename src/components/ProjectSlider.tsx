import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerBg from "../assets/img/bannerbg.webp";
import { projectsData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import LiveTicker from "./ParallaxText";

const ProjectSlider: React.FC = () => {
  const { ref } = useSectionInView("Experiences");
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["1 1", "1.3 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <React.Fragment>
      <section
        className=" skill-banner relative overflow-x-clip h-100% w-full flex flex-col gap-2 "
        id="projects"
        ref={ref}
      >
        <ToastContainer
          className="w-max text-3xl block p-3 "
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div
          className="quote-outer-container bg-[--darkblue] -rotate-3 flex justify-center items-center scale-110 pt-32 pb-32 max-lg:pt-16 max-lg:pb-16 max-lg:-ml-44 max-lg:-mr-44 max-lg:scale-100 "
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="title-container flex flex-col gap-6 mb-24 rotate-3 justify-between items-center max-lg:w-[100vw]">
            <motion.div
              ref={animationReference}
              style={{
                scale: scaleProgess,
                opacity: opacityProgess,
                textAlign: "center",
              }}
            >
              <p className="text-[--white] mt-16 mb-6">
                <span className="text-[--orange]">&lt;</span>
                {language === "FR" ? "Expérience" : "Experience"}
                <span className="text-[--orange]">/&gt;</span>
              </p>
              <h2 className="text-[--white] mb-16">
                {language === "FR" ? "Mes Expériences" : "My Experience"}
              </h2>
            </motion.div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              className=" w-[60vw] max-lg:hidden min-[1921px]:px-96"
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {projectsData.map((project, index: number) => (
                <SwiperSlide
                  key={index}
                  className="quote-outer-container bg-[--darkblue] text-[--white] flex flex-row justify-between  rounded-2xl p-20 text-left max-lg:hidden "
                >
                  <div className=" w-full flex flex-col gap-12 justify-between ">
                    <h2>
                      {language === "FR" ? project.title : project.title_EN}
                    </h2>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold">{project.company}</h3>
                      <h4 className="text-lg">
                        {language === "FR" ? project.date.fr : project.date.en}
                      </h4>
                    </div>
                    <ul className="text-white list-disc pl-5 space-y-2 text-lg max-lg:pl-3 max-lg:text-xl max-lg:space-y-1">
                      {(language === "FR"
                        ? project.description
                        : project.description_EN
                      ).map((line, index) => (
                        <li
                          key={index}
                          className="max-lg:list-item"
                          style={{
                            marginBottom: "1rem", // Espacement entre les lignes
                            lineHeight: "1.6", // Hauteur de ligne
                            fontSize: "1.5rem", // Taille de police
                            whiteSpace: "pre-line", // Gestion du retour à la ligne
                          }}
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                    <div className="technologies">
                      <h3>
                        {language === "FR" ? "Technologies" : "Technologies"}
                      </h3>
                      <div className="grid grid-cols-6 gap-10 p-4">
                        {project.technologies.map(
                          (technology, innerIndex: number) => (
                            <img
                              key={innerIndex}
                              src={technology.icon}
                              alt={`${project.title}-icon`}
                              className="h-[5rem] w-[60%] "
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content={technology.name}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {projectsData.map((project, index: number) => (
              <article
                key={index}
                className="bg-darkblue flex flex-col gap-10 w-[80%] h-full  border-lightblue border-[0.4rem] p-8 rounded-xl mb-10 min-[1024px]:hidden max-lg:w-[90%]"
              >
                <h2 className="text-white">
                  {language === "FR" ? project.title : project.title_EN}
                </h2>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-semibold">
                    {project.company}
                  </h3>
                  <h4 className="text-white text-lg">
                    {language === "FR" ? project.date.fr : project.date.en}
                  </h4>
                </div>
                <ul className="text-white list-disc pl-5 space-y-2 text-lg max-lg:pl-3 max-lg:text-xl max-lg:space-y-1">
                  {(language === "FR"
                    ? project.description
                    : project.description_EN
                  ).map((line, index) => (
                    <li
                      key={index}
                      className="max-lg:list-item"
                      style={{
                        marginBottom: "1rem", // Espacement entre les lignes
                        lineHeight: "1.6", // Hauteur de ligne
                        fontSize: "1.5rem", // Taille de police
                        whiteSpace: "pre-line", // Gestion du retour à la ligne
                      }}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="technologies">
                  <h3 className="text-white">
                    {language === "FR" ? "Technologies" : "Technologies"}
                  </h3>
                  <div className="grid grid-cols-3 gap-10 p-4">
                    {project.technologies.map(
                      (technology, innerIndex: number) => (
                        <img
                          key={innerIndex}
                          src={technology.icon}
                          alt={`${project.title}-icon`}
                          className="h-[5rem] w-[60%] "
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={technology.name}
                        />
                      )
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <LiveTicker />
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          backgroundColor: "var(--orange)",
        }}
      />
    </React.Fragment>
  );
};

export default ProjectSlider;
