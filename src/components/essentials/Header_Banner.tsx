import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import photo from "../../assets/images/sketch2.svg";

const Header_Banner = ({ isScrolled }: { isScrolled: boolean }) => {
  const count = useMotionValue(0);
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2,
      delay: 0.5,
      ease: "easeInOut",
      onUpdate: (l) => setDisplayedValue(Math.round(l)),
    });
    return controls.stop;
  }, []);
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 1, y: "-10vh" }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 1.5, stiffness: 400 }}
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
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Header_Banner;
