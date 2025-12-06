import { motion } from "framer-motion";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import type { Service } from "../../../assets/data/services";
import MotionUpDown from "../../Motion/MotionUpDown";
import ScrollingOneSide from "../../Scrolling/ScrollingOneSide";

const BaseComponent = ({ service }: { service: Service }) => {
  return (
    <>
      <motion.section
        className="relative w-full min-h-[30em] md:min-h-[50em] overflow-hidden"
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
            <button>
              <Link
                to="/contact"
                className="hidden sm:inline-block px-9 py-3 rounded-md border border-white hover:bg-[#007bff] hover:border-[#007bff]"
              >
                <div className="pl-3 pr-3 p-1 flex items-center space-x-2 text-md text-white text-xl">
                  <BsTelephone className="text-lg" />
                  <span>Contact us Today</span>
                </div>
              </Link>
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
                <ul className="space-y-5 ml-5 font-medium">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center ">
                      <span className=" text-black font-semibold ml-5 rounded-lg p-2">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pl-4 max-w-6xl mx-auto mt-10 mb-5 grid grid-cols-3 gap-1 justify-center items-center text-left overflow-hidden text-black ">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl h-[300px] p-3 hover:scale-105 duration-500 ease-in-out"
              />
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl h-[300px] p-3 hover:scale-105 duration-500 ease-in-out"
              />
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl h-[300px] p-3 hover:scale-105 duration-500 ease-in-out"
              />
            </div>
          </section>
        </div>
      </MotionUpDown>
    </>
  );
};

export default BaseComponent;
