import { motion } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import contact from "../assets/images/Model3Standard_91.jpg";
import MapCard from "./essentials/MapCard";
import MotionUpDown from "./Motion/MotionUpDown";

const Contact = () => {
  return (
    <>
      <motion.section
        className="relative w-full min-h-[30em] md:min-h-[45em]  overflow-hidden bg-[linear-gradient(135deg,rgba(0,123,255,0.2),rgba(0,0,0,0))]"
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
        <div className="relative z-10 flex flex-col items-center pt-70 mb-20 px-6 text-white space-y-5 text-center">
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
        <div className="relative bg-[linear-gradient(135deg,rgba(0,123,255,0.2),rgba(0,0,0,0))]">
          <section id="contact" className="py-4">
            <div className="max-w-6xl mx-auto mb-5 grid grid-cols-2 gap-1 justify-center items-center text-left overflow-hidden text-white">
              <div className="h-full text-black">
                <div className="p-3">
                  <h1 className="text-2xl font-bold">Co-operate Office</h1>
                  <div className="mt-2 space-y-3 border w-[380px] p-5 rounded-md">
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
                  <h1 className="text-2xl font-bold">Service Center</h1>
                  <div className="mt-2 space-y-3 border w-[380px] p-5 rounded-md">
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
                <div id="mapsection">
                  <MapCard
                    height={500}
                    width={500}
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
          </section>
        </div>
      </MotionUpDown>
    </>
  );
};

export default Contact;

//  <div className="ml-3 mb-2 text-black">
//                   <h1 className="text-lg font-bold">Send Us a Message</h1>
//                 </div>

//                 <form
//                   className="bg-white h-fit flex flex-col justify-between rounded-2xl shadow-2xl p-5"
//                   onSubmit={(e) => e.preventDefault()}
//                 >
//                   <div className="space-y-3">
//                     {/* Name */}
//                     <div>
//                       <label className="block text-sm font-light text-gray-700">
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         className="mt-1 w-full rounded-lg border border-gray-300 text-sm font-light px-3 py-2 focus:ring-1 focus:ring-black/30 outline-none"
//                         placeholder="Enter your name"
//                       />
//                     </div>

//                     {/* Mobile */}
//                     <div>
//                       <label className="block text-sm font-light text-gray-700">
//                         Mobile
//                       </label>
//                       <input
//                         type="tel"
//                         className="mt-1 w-full rounded-lg border border-gray-300 text-sm font-light px-3 py-2 focus:ring-1 focus:ring-black/30 outline-none"
//                         placeholder="07X XXX XXXX"
//                       />
//                     </div>

//                     {/* Description */}
//                     <div>
//                       <label className="block text-sm font-light text-gray-700">
//                         Description
//                       </label>
//                       <textarea
//                         rows={7}
//                         className="mt-1 w-full rounded-lg border border-gray-300 text-sm font-light px-3 py-2 focus:ring-1 focus:ring-black/30 outline-none"
//                         placeholder="How can we help?"
//                       ></textarea>
//                     </div>
//                   </div>

//                   {/* Button */}
//                   <button
//                     type="submit"
//                     className="w-full bg-black text-white py-2 rounded-lg font-light hover:bg-black/90 transition"
//                   >
//                     Send Message
//                   </button>
//                 </form>
