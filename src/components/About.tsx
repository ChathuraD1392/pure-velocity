import { motion } from "framer-motion";
import { aboutData } from "../assets/data/aboutData";
import sideImage_2 from "../assets/images/Model3Standard_88.jpg";
import AboutContainer from "./essentials/AboutComponents/AboutContainer";
import ScrollingOneSide from "./Scrolling/ScrollingOneSide";

const About = () => {
  return (
    <>
      <motion.section
        className={`relative w-full min-h-[30em] md:min-h-[50em] overflow-hidden `}
        initial={{ opacity: 0, y: "-20vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          delay: 0.5,
          type: "spring",
          stiffness: 50,
        }}
      >
        <img
          src={sideImage_2}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center pt-70 px-6 text-white space-y-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About</h1>
          <p className="max-w-3xl text-sm md:text-2xl font-light leading-relaxed text-white/80">
            Pure Velocity -{" "}
            <span className="text-white font-medium">
              Sri Lanka’s Home of Tesla Expertise
            </span>
          </p>
        </div>
      </motion.section>

      <div className="w-full">
        <div className="w-full relative flex items-center justify-center">
          <img
            src={sideImage_2}
            alt=""
            className="absolute w-full h-full object-cover hue-rotate-180 opacity-2 inset-0 stroke-[0.25]"
          />

          <div className="text-left max-w-8xl space-y-1 z-10 text-black mb-5 bg-white/60 h-full">
            {/* <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,123,255,0.2),rgba(0,0,0,0))]"></div> */}
            <div className="z-10 max-w-6xl mx-auto px-1 sm:px-2 lg:px-2 mb-5">
              <motion.h2
                initial={{ opacity: 0, y: "-10vh" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                className="text-black text-5xl font-bold text-center pt-5 pb-5"
              ></motion.h2>
              <h1 className="text-5xl font-bold mb-5 text-black text-center md:text-left">
                Sri Lanka’s Home of Tesla Expertise
              </h1>
              <h3 className="text-2xl font-semibold mt-5 mb-5">
                Pure Velocity began with a simple idea to bring world-class
                Tesla servicing to Sri Lanka.
              </h3>
              <p className="text-lg font-light mt-2">
                Founded by <b className="font-semibold">Shanil</b> and{" "}
                <b className="font-semibold">Dilin</b> — two entrepreneurs, tech
                lovers, and unapologetic car addicts — PV has grown into a
                full-service Tesla workshop backed by global experience.
              </p>

              <p className="text-lg font-light mt-2">
                With <b className="font-semibold">Sanjeev</b> leading operations
                on the ground, <b className="font-semibold">Dinesh</b>{" "}
                maintaining standards and finances with military precision, and
                Rukshan powering customer support and admin, PV runs like a
                perfectly balanced EV drivetrain.
              </p>
              <p className="text-lg font-light mt-2">
                Our team is trained in advanced diagnostics, HV systems, battery
                troubleshooting, and software-level repair workflows used
                internationally.
              </p>
              <ScrollingOneSide y={100} duration={1}>
                {aboutData.map((about) => (
                  <AboutContainer about={about} />
                ))}
              </ScrollingOneSide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
