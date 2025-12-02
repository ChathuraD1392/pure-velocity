import { motion } from "framer-motion";
import video from "../assets/video/background_video.mp4";
import About_Card from "./essentials/About_Card";
import { philosophyDetails } from "./essentials/Card";

const About = () => {
  return (
    <>
      <div className="relative mt-15">
        <section id="about" className="py-15">
          <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 1, y: "-5vh" }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.55, stiffness: 20 }}
            >
              <h2 className="text-5xl font-bold">
                Pure Velocity - Sri Lanka’s Home of Tesla Expertise
              </h2>
              <p className="mt-4 w-full hidden md:block">
                <div className="border-0 text-[#0a0f2d] text-xl text-left rounded">
                  Pure Velocity began with a simple idea:{" "}
                  <span>To bring world-class Tesla servicing to Sri Lanka</span>
                </div>
              </p>

              <p className="text-md mt-5 text-[#0a0f2d] rounded-lg">
                <span className="text-md font-bold">Our Mission</span>
              </p>
              <p className="text-md mt-5 text-[#0a0f2d] bg-[#00ff99] p-3 rounded-lg">
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
                <p className="text-md mt-5 text-[#0a0f2d] rounded-lg">
                  <span className="text-md font-bold">Our Philosophy</span>
                </p>
                <div className="grid md:grid-cols-4 gap-6 mt-4 max-w-7xl mx-auto">
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

            {/* <motion.div
              initial={{ opacity: 0, scale: 1, y: "-10vh" }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", delay: 1, stiffness: 100 }}
              className="rounded-xl overflow-hidden shadow-lg bg-white h-full w-85 md:w-3xl hidden md:block"
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
            </motion.div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
