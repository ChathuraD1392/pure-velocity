import { motion } from "framer-motion";
import type { Service } from "../../../assets/data/services";
import MotionUpDown from "../../Motion/MotionUpDown";
import { BsFillTelephoneFill } from "react-icons/bs";
import ScrollingOneSide from "../../Scrolling/ScrollingOneSide";

const BaseComponent = ({ service }: { service: Service }) => {
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
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center pt-70 px-6 text-white space-y-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
          <ScrollingOneSide y={100} duration={1}>
            <button className="bg-[#007bff] p-5 pl-10 pr-10 mt-5 rounded-md text-[#ffffff] font-light text-lg inline-flex items-center">
              <BsFillTelephoneFill className="mr-2 font-semibold" />
              CONTACT US TODAY
            </button>
          </ScrollingOneSide>
        </div>
      </motion.section>
      <MotionUpDown initialY="-10vh" delay={1} duration={1}>
        <div className="relative">
          <section id="contact" className="pt-4">
            <div className="pl-4 max-w-6xl mx-auto mt-10 mb-5 justify-center items-center text-left overflow-hidden text-black">
              <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
              <h4 className="text-xl font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                quia incidunt et corporis tempora in, repudiandae eos! Sequi,
                repudiandae minima dicta atque illo aperiam voluptatem accusamus
                neque eaque perferendis illum nemo ducimus amet consequatur
                nobis odit nihil quibusdam recusandae sapiente?
              </h4>
            </div>

            <div className="pl-4 max-w-6xl mx-auto mt-10 grid grid-cols-2 gap-1 justify-center items-center text-left overflow-hidden text-black">
              <div className="mr-2">
                <ul>
                  {service.bullets.map((b) => (
                    <li key={b}>
                      <span className="text-green-300 font-bold mr-3">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pl-4 max-w-6xl mx-auto mt-10 mb-5 grid grid-cols-3 gap-3 justify-center items-center text-left overflow-hidden text-black">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg h-[300px]"
              />
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg h-[300px]"
              />
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg h-[300px]"
              />
            </div>
          </section>
        </div>
      </MotionUpDown>
    </>
  );
};

export default BaseComponent;
