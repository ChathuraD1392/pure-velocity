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
  const isInView = useInView(ref, { once: true, margin: "-42.5px" });

  const paragraphs = [
    "From advanced diagnostics to high-voltage repairs, from software-level troubleshooting to general maintenance, Pure Velocity is where Tesla owners come when they want the job done right the first time.",
    "We are Sri Lanka’s Tesla movement - built by enthusiasts, backed by international EV experts, and trusted by owners across the country.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2,
      delay: 2,
      ease: "easeInOut",
      onUpdate: (l) => setDisplayedValue(Math.round(l)),
    });
    return controls.stop;
  }, [isInView, count]);
  return (
    <>
      <motion.section
        ref={ref}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          delay: 0,
          duration: 1,
          stiffness: 400,
          ease: "easeOut",
        }}
        className="w-full overflow-visible relative"
      >
        <div className="relative w-full -mt-10">
          <div className="bg-[#007bff] clip-slant h-[800px] w-full relative flex items-center justify-center pt-10">
            <img
              src={photo}
              alt=""
              className="absolute w-full h-full object-cover filter invert hue-rotate-180 opacity-9 inset-0 stroke-[0.25]"
            />

            <div className="text-center space-y-1 z-10 text-white mb-20 grid grid-cols-1">
              <h4 className="text-5xl max-w-5xl font-light mb-5 text-center justify-self-center">
                We’re not just a workshop
              </h4>
              <h4 className="text-2xl max-w-5xl font-light mt-1 mb-5 text-center justify-self-center h-[100px]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-lg md:text-xl font-medium px-4"
                  >
                    {paragraphs[index]}
                  </motion.p>
                </AnimatePresence>
              </h4>

              <h4 className="text-5xl max-w-5xl font-semibold text-center justify-self-center mt-5 mb-10">
                What We Do?
              </h4>
              <div className="grid grid-cols-4 gap-4 max-w-7xl mb-5">
                {services.map((service) => (
                  <Link to={`services/${service.href!}`} key={service.id}>
                    <button className="w-full h-full pl-4 pr-4 pt-6 pb-6 bg-[#0a0f2d]/70 rounded-lg cursor-pointer hover:bg-[#0a0f2d]/90 hover:scale-105 duration-500 text-lg">
                      {service.title.toUpperCase()}
                    </button>
                  </Link>
                ))}
              </div>
              <div className="p-2 mt-4 rounded-lg text-xl font-semibold">
                If it has a battery, a motor, and a Tesla badge - we’ve got it
                covered.
              </div>
              {/* <ScrollingOneSide y={100} duration={1}>
                <h1 className="text-2xl md:text-5xl font-medium leading-tight">
                  We specialize
                  <span className="text-[#0a0f2d] p-4 rounded-lg font-semibold">
                    {displayedValue}%
                  </span>
                  in Tesla vehicles, nothing else.
                </h1>
              </ScrollingOneSide> */}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Header_Banner;
