import { animate, motion, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import photo from "../../../assets/images/sketch2.svg";
import ScrollEffect from "../../Scrolling/ScrollEffect";
import ScrollingOneSide from "../../Scrolling/ScrollingOneSide";

const Header_Banner = () => {
  const count = useMotionValue(0);
  const [displayedValue, setDisplayedValue] = useState(0);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-42.5px" });

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2,
      delay: 1,
      ease: "easeInOut",
      onUpdate: (l) => setDisplayedValue(Math.round(l)),
    });
    return controls.stop;
  }, [isInView]);
  return (
    <>
      <motion.section
        ref={ref}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          delay: 0,
          duration: 1.5,
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

            <div className="text-center space-y-1 z-10 text-white px-4 mb-20">
              <ScrollingOneSide y={100} duration={1}>
                <h1 className="text-5xl md:text-8xl font-medium leading-tight">
                  We specialise <br />
                  <span className="text-[#0a0f2d] p-4 rounded-lg font-semibold">
                    {displayedValue}%
                  </span>
                  <br />
                  in Tesla vehicles,
                  <br />
                  nothing else.
                </h1>
              </ScrollingOneSide>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Header_Banner;
