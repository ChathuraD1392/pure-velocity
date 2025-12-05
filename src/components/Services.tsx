// Services.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../assets/data/services";
import service from "../assets/images/service.jpg";
import MotionUpDown from "./Motion/MotionUpDown";

const Services = () => {
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
          src={service}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center pt-70 px-6 text-white space-y-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Services & Repairs</h1>
          <p className="max-w-3xl text-sm md:text-2xl font-light leading-relaxed text-white/80">
            We specialise <span className="text-white font-medium">100%</span>{" "}
            in Tesla vehicles - nothing else.
          </p>
        </div>
      </motion.section>
      <MotionUpDown initialY="-10vh" delay={1} duration={1}>
        <div className="relative">
          <section id="contact" className="pt-0 md:pt-4">
            <div className="pl-0 md:pl-4 max-w-7xl mx-auto mt-10 justify-center items-center text-center md:text-left overflow-hidden text-black">
              <h1 className="text-5xl font-bold mb-4">
                All Tesla services and Repairs
              </h1>
              <h4 className="text-xl font-light mb-5 p-3 md:p-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                quia incidunt et corporis tempora in, repudiandae eos! Sequi,
                repudiandae minima dicta atque illo aperiam voluptatem accusamus
                neque eaque perferendis illum nemo ducimus amet consequatur
                nobis odit nihil quibusdam recusandae sapiente?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-4">
                {services.map((service) => (
                  <div
                    className={`relative group col-span-${
                      service.col
                    } row-span-${service.col} w-full h-full md:h-[${
                      246 * service.col!
                    }px] rounded-lg overflow-hidden p-1 md:p-1`}
                    key={service.id}
                  >
                    <Link to={service.href!}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover h-full w-full rounded-lg"
                      />

                      <div className="absolute m-1 p-4 md:p-2 text-2xl text-center rounded-lg inset-0 bg-black/40 opacity-60 hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white font-semibold cursor-pointer">
                        {service.title}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </MotionUpDown>
    </>
  );
};

export default Services;
