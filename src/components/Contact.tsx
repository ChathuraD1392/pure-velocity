import { motion } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import contact from "../assets/images/Model3Standard_91.jpg";
import Form from "./essentials/Form";
import MapCard from "./essentials/MapCard";
import MotionUpDown from "./Motion/MotionUpDown";

const Contact = () => {
  return (
    <>
      <motion.section
        className="relative w-full min-h-[30em] md:min-h-[50em] overflow-hidden bg-amber-500"
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
          src={contact}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center pt-70 px-6 text-white space-y-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get in Touch With Us
          </h1>
          <p className="max-w-3xl text-sm md:text-2xl font-light leading-relaxed text-white/80">
            Whether your Tesla{" "}
            <span className="text-white font-medium">
              needs a quick check-up
            </span>{" "}
            or a{" "}
            <span className="text-white font-medium">
              full diagnostic deep dive
            </span>
            , our expert team is here to{" "}
            <span className="text-white font-medium">help.</span>
          </p>
        </div>
      </motion.section>
      <MotionUpDown initialY="-10vh" delay={1} duration={1}>
        <div className="relative">
          <section id="contact" className="pt-4">
            <div className="pl-4 max-w-6xl mx-auto mt-10 mb-5 justify-center items-center text-left overflow-hidden text-black">
              <h1 className="text-5xl font-bold mb-4">How to find us</h1>
              <h4 className="text-xl font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                quia incidunt et corporis tempora in, repudiandae eos! Sequi,
                repudiandae minima dicta atque illo aperiam voluptatem accusamus
                neque eaque perferendis illum nemo ducimus amet consequatur
                nobis odit nihil quibusdam recusandae sapiente?
              </h4>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-1 justify-center items-center text-left overflow-hidden text-white">
              <div className="h-full text-black">
                <div className="p-3">
                  <h1 className="text-2xl font-bold bg-[#0a0f2d]/80 w-[380px] p-2 pl-5 text-white rounded">
                    Co-operate Office
                  </h1>
                  <div className="mt-3 space-y-3 border w-[380px] p-5 rounded-md shadow-xl">
                    <p className="flex items-center text-sm">
                      <BsFillTelephoneFill className="mr-3 text-xl" /> +94
                      XXXXXXXX
                    </p>
                    <p className="flex items-center text-sm">
                      <FaLocationDot className="mr-3 text-xl" /> 11/3/2, Marine
                      Drive, Wellawatte Colombo 06
                    </p>
                    <p className="flex items-center text-sm">
                      <MdEmail className="mr-3 text-xl" />
                      headoffice@purevelocity.lk
                    </p>
                    <p className="flex items-start text-sm">
                      <FaClock className="mr-3 text-xl" />
                      Mon - Fri: 10am - 8pm Sat - Sun <br /> Public Holidays:
                      10am - 7pm
                    </p>
                  </div>
                </div>
                <div className="p-3">
                  <h1 className="text-2xl font-bold bg-[#0a0f2d]/80 w-[380px] p-2 pl-5 text-white rounded">
                    Service Center
                  </h1>
                  <div className="mt-3 space-y-3 border w-[380px] p-5 rounded-md shadow-xl">
                    <p className="flex items-center text-sm">
                      <BsFillTelephoneFill className="mr-3 text-xl" /> +94
                      XXXXXXXX
                    </p>
                    <p className="flex items-center text-sm">
                      <FaLocationDot className="mr-3 text-xl" /> 75, Station
                      Road, Kandana, Sri Lanka
                    </p>
                    <p className="flex items-center text-sm">
                      <MdEmail className="mr-3 text-xl" />
                      headoffice@purevelocity.lk
                    </p>
                    <p className="flex items-start text-sm">
                      <FaClock className="mr-3 text-xl" />
                      Mon - Fri: 10am - 8pm Sat - Sun <br /> Public Holidays:
                      10am - 7pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-full p-2">
                <div id="mapsection w-full">
                  <MapCard
                    height={500}
                    width={"full"}
                    btnColor="#00ff99"
                    textColor="#0a0f2d"
                    opacity={50}
                    backgroundColor="white"
                    paraColor="#0a0f2d"
                    footerColor="white"
                    isBtnAvailable={false}
                  />
                </div>
              </div>
            </div>
            <div className="pl-4 max-w-6xl mx-auto mt-10 grid grid-cols-1 gap-1 justify-center items-center text-left overflow-hidden text-black">
              {/* <img src={contact1} alt="" className="rounded-xl" /> */}
              <h2></h2>
              <div className="mr-2">
                <Form />
              </div>
            </div>
          </section>
        </div>
      </MotionUpDown>
    </>
  );
};

export default Contact;
