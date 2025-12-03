import { motion } from "framer-motion";
import image from "../assets/images/Model3Standard_87.jpg";
import sideImage_2 from "../assets/images/Model3Standard_88.jpg";
import { philosophyDetails } from "./essentials/Card";
import About_Card from "./essentials/About_Card";

const About = () => {
  return (
    <>
      <div className="relative">
        <section
          id="about"
          className={`py-35 bg-cover bg-center bg-no-repeat bg-[linear-gradient(135deg,rgba(0,123,255,0.2),rgba(0,0,0,0))]`}
        >
          <div className="px-4 sm:px-6 lg:px-8 text-center ">
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
              <motion.h2
                initial={{ opacity: 0, y: "-10vh" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.75,
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-5xl font-bold"
              >
                Sri Lanka’s Home of Tesla Expertise
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: "-10vh" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                className="mt-4 w-full hidden md:block"
              >
                <div className="border-0 text-[#0a0f2d] text-2xl text-center rounded">
                  Pure Velocity began with a simple idea :
                  <span>
                    {" "}
                    To bring world-class Tesla servicing to Sri Lanka
                  </span>
                </div>
              </motion.p>

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
      </div>
    </>
  );
};

export default About;
