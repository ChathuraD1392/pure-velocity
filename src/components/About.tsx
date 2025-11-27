import { motion } from "framer-motion";
import { PiTargetBold } from "react-icons/pi";
import video from "../assets/video/background_video.mp4";
import { steps } from "./essentials/Card";

const About = () => {
  return (
    <>
      <div className="relative top-20">
        <section id="about" className="py-16">
          <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 1, y: "-5vh" }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.55, stiffness: 20 }}
            >
              <h2 className="text-3xl font-bold">
                Pure Velocity - Sri Lanka’s Home of Tesla Expertise
              </h2>
              <p className="mt-4 leading-relaxed text-xl font-semibold">
                <div className="badge border-0 bg-[#007bff] text-white">
                  <PiTargetBold className="text-lg" />
                  Pure Velocity began with a simple idea: To bring world-class
                  Tesla servicing to Sri Lanka
                </div>
              </p>

              <p className="text-md mt-5 text-[#0a0f2d] bg-[#00ff99] p-3 rounded-lg">
                <span className="text-md font-bold">Our Mission :</span>
                To become Sri Lanka’s most trusted and advanced Tesla service
                ecosystem, setting a new benchmark for EV maintenance,
                transparency, and customer care.
              </p>

              <p className="mt-4 text-gray-700">
                Founded by Shanil and Dilin-two entrepreneurs, tech lovers, and
                unapologetic car addicts-PV has grown into a full-service Tesla
                workshop backed by global experience.
              </p>
              <p className="mt-4 text-gray-700">
                With Sanjeev leading operations on the ground, Dinesh
                maintaining standards and finances with military precision, and
                Rukshan powering customer support and admin, PV runs like a
                perfectly balanced EV drivetrain.
              </p>
              <p className="mt-4 text-gray-700">
                Our team is trained in advanced diagnostics, HV systems, battery
                troubleshooting, and software-level repair workflows used
                internationally.
              </p>
              <div className="mt-5 mb-4">
                <p className="text-md mt-5 text-[#0a0f2d] p-3 rounded-lg">
                  <span className="text-md font-bold">Our Philosophy</span>
                </p>
                <div className="grid md:grid-cols-4 gap-6 mt-4 max-w-7xl mx-auto">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        scale: 0.9,
                        opacity: 0,
                        y: "-10vh",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.5 + index * 0.2,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="group bg-white p-4 rounded-xl shadow-2xl relative text-[#007bff]
                 hover:bg-[#007bff] duration-500"
                    >
                      <h3
                        className="text-4xl font-bold text-[#0a0f2d] bg-clip-text 
                     group-hover:text-white"
                      >
                        {step.element}
                      </h3>

                      <h4 className="mt-4 text-md text-[#0a0f2d] font-semibold group-hover:text-white">
                        {step.title}
                      </h4>

                      <p className="mt-4 text-sm text-[#0a0f2d] leading-relaxed group-hover:text-white">
                        {step.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1, y: "-10vh" }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", delay: 1, stiffness: 100 }}
              className="rounded-xl overflow-hidden shadow-lg bg-white h-full w-85 md:w-3xl"
            >
              <span className="w-fit">
                <video
                  autoPlay
                  // loop
                  muted
                  playsInline
                  className="inset-0 w-fit h-full object-cover"
                >
                  <source src={video} type="video/mp4" />
                </video>
              </span>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
