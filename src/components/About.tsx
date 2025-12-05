import { motion } from "framer-motion";
import { aboutData } from "../assets/data/aboutData";
import sideImage_2 from "../assets/images/Model3Standard_88.jpg";
import AboutContainer from "./essentials/AboutComponents/AboutContainer";

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
                Pure Velocity — Sri Lanka’s Home of Tesla Expertise
              </h1>
              <h3 className="text-2xl font-semibold mt-5 mb-5">
                Pure Velocity began with a simple idea to bring world-class
                Tesla servicing to Sri Lanka.
              </h3>
              <p className="text--lg font-light mt-2">
                Founded by Shanil and Dilin — two entrepreneurs, tech lovers,
                and unapologetic car addicts — PV has grown into a full-service
                Tesla workshop backed by global experience.
              </p>

              <p className="text--lg font-light mt-2">
                With Sanjeev leading operations on the ground, Dinesh
                maintaining standards and finances with military precision, and
                Rukshan powering customer support and admin, PV runs like a
                perfectly balanced EV drivetrain.
              </p>
              <p className="text--lg font-light mt-2">
                Our team is trained in advanced diagnostics, HV systems, battery
                troubleshooting, and software-level repair workflows used
                internationally.
              </p>

              {aboutData.map((about) => (
                <AboutContainer about={about} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative">
        <section
          id="about"
          className={`py-35 bg-cover bg-center bg-no-repeat bg-[linear-gradient(135deg,rgba(0,123,255,0.2),rgba(0,0,0,0))]`}
        >
          <div className="px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: "-20vh" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                delay: 0.5,
                type: "spring",
                stiffness: 50,
              }}
              className="max-w-6xl mx-auto"
            >
              <div className="max-w-6xl mx-auto mt-5 flex justify-center items-center text-center rounded-2xl overflow-hidden h-[650px]">
                <img src={image} alt="cover" />
              </div>

              <div className="max-w-6xl mx-auto mt-5 grid grid-col-2 md:grid-cols-4 justify-between items-center text-center rounded-2xl overflow-hidden bg-[#0a0f2d]/85 py-3 text-white">
                <div className="text-center py-2">
                  <h1 className="font-medium text-5xl">100%</h1>
                  <p className="font-medium text-2xl">Lorem</p>
                </div>
                <div className="py-2">
                  <h1 className="font-medium text-5xl">6M</h1>
                  <p className="font-medium text-2xl">Ipsum</p>
                </div>
                <div className="py-2">
                  <h1 className="font-medium text-5xl">25.4</h1>
                  <p className="font-medium text-2xl">People</p>
                </div>
                <div className="py-2">
                  <h1 className="font-medium text-5xl">FULL</h1>
                  <p className="font-medium text-2xl">Cover</p>
                </div>
              </div>

              <div className="max-w-6xl mx-auto mt-5 grid grid-cols-2 gap-1 justify-between items-center text-left rounded-t-2xl overflow-hidden text-white">
                <div className="p-5 text-[#0a0f2d] bg-[#0a0f2d]/45">
                  <p className="mt-2 text-[#0a0f2d] rounded-lg">
                    <span className="text-3xl font-semibold text-[#ffffff]">
                      Our Mission
                    </span>
                  </p>
                  <p className="text-md font-lighter mt-5 text-[#ffffff]  p-3 rounded-lg">
                    To become Sri Lanka’s most trusted and advanced Tesla
                    service ecosystem, setting a new benchmark for EV
                    maintenance, transparency, and customer care.
                  </p>

                  <p className="mt-4 px-2 text-[#ffffff] text-left font-light">
                    Founded by Shanil and Dilin-two entrepreneurs, tech lovers,
                    and unapologetic car addicts-PV has grown into a
                    full-service Tesla workshop backed by global experience.
                  </p>
                  <p className="mt-4 px-2 text-[#ffffff] text-left font-light">
                    With Sanjeev leading operations on the ground, Dinesh
                    maintaining standards and finances with military precision,
                    and Rukshan powering customer support and admin, PV runs
                    like a perfectly balanced EV drivetrain.
                  </p>
                  <p className="mt-4 px-2 text-[#ffffff] text-left font-light">
                    Our team is trained in advanced diagnostics, HV systems,
                    battery troubleshooting, and software-level repair workflows
                    used internationally.
                  </p>
                </div>
                <div className="h-full rounded-t-2xl">
                  <img
                    src={sideImage_2}
                    alt="side_image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="max-w-6xl mx-auto rounded-b-2xl bg-[#0a0f2d]/45 pb-20 mt-1">
                <p className="text-3xl text-left pt-10 pl-5 text-[#0a0f2d] rounded-lg">
                  <span className="text-md font-semibold text-[#ffffff]">
                    Our Philosophy
                  </span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 mt-6 h-[220px] text-left">
                  {philosophyDetails.map((detail, index) => (
                    <About_Card
                      key={index}
                      element={detail.element}
                      title={detail.title}
                      text={detail.text}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div> */}
    </>
  );
};

export default About;
