import {
  animate,
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../../../assets/data/services";
import photo from "../../../assets/images/sketch2.svg";

const Header_Banner = () => {
  const count = useMotionValue(0);
  const [_, setDisplayedValue] = useState(0);
  const [index, setIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // <-- Prevents repeated animations
    margin: "-30px",
  });

  const paragraphs = [
    "From advanced diagnostics to high-voltage repairs, from software-level troubleshooting to general maintenance, Pure Velocity is where Tesla owners come when they want the job done right the first time.",
    "We are Sri Lanka’s Tesla movement - built by enthusiasts, backed by international EV experts, and trusted by owners across the country.",
  ];

  // Smooth paragraph swap
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Smooth counting animation
  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, 100, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplayedValue(Math.round(v)),
    });

    return () => controls.stop();
  }, [isInView]);

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full overflow-visible relative"
      >
        <div className="relative w-full md:-mt-10">
          <div className="bg-[#007bff] clip-slant h-[900px] md:h-[800px] w-full relative flex items-center justify-center md:pt-10">
            {/* Light GPU-friendly BG image */}
            <img
              src={photo}
              alt=""
              className="absolute w-full h-full object-cover opacity-10 inset-0 will-change-transform"
            />

            <div className="text-center space-y-1 z-10 text-white md:mb-20 grid grid-cols-1">
              <h4 className="text-2xl md:text-5xl w-full font-light mt-5 mb-0 md:mb-5 ">
                We’re not just a workshop
              </h4>

              <h4 className="text-sm md:text-2xl max-w-5xl font-light mt-3 mb-4 md:mb-5 h-[100px] justify-self-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-md md:text-xl font-sm md:font-medium px-4"
                  >
                    {paragraphs[index]}
                  </motion.p>
                </AnimatePresence>
              </h4>

              <h4 className="text-2xl md:text-5xl font-semibold md:mt-5 mb-5 md:mb-10">
                What We Do?
              </h4>

              {/* Smooth service animation */}
              <motion.div
                className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mb-5 md:mb-5"
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08 },
                  },
                }}
              >
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    <Link to={`services/${service.href}`}>
                      <button className=" w-3/4 md:w-full h-full md:px-4 py-4 md:py-6 bg-[#0a0f2d]/70 rounded-lg hover:bg-[#0a0f2d]/90 hover:scale-105 duration-300 text-sm md:text-lg">
                        {service.title.toUpperCase()}
                      </button>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <div className="p-1 md:p-2 mt-1 md:mt-4 text-md md:text-xl font-semibold">
                If it has a battery, a motor, and a Tesla badge – we’ve got it
                covered.
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Header_Banner;
