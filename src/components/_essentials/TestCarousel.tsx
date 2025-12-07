import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { memberDetails } from "../../assets/data/team";
import MotionUpDown from "./Motion/MotionUpDown";

export default function TeamCarousel() {
  const [index, setIndex] = useState(0);
  const [_, setFade] = useState(true);

  const cardVariants = {
    initial: { opacity: 0.5 },
    animate: { opacity: 1 },
    exit: { opacity: 0.5 },
  };
  const [time, setTime] = useState(5000);
  const next = () => setIndex((i) => (i + 1) % memberDetails.length);
  // const prev = () =>
  //   setIndex((i) => (i - 1 + memberDetails.length) % memberDetails.length);

  // Auto‑run every 3 seconds with fade effect
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        next(); // change index
        setFade(true); // fade in
      }, 600); // fade duration
    }, time);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-start 
pt-28 md:pt-32 bg-[#0a0f2d]/40 overflow-hidden"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: "-10vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.5,
          type: "spring",
          stiffness: 200,
        }}
        className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight text-center px-3"
      >
        Our Team
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: "-10vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.5,
          type: "spring",
          stiffness: 200,
        }}
        className="mt-3 sm:mt-4 text-sm sm:text-md md:text-lg lg:text-2xl 
               font-light max-w-xl sm:max-w-2xl md:max-w-3xl 
               tracking-wide text-center px-4"
      >
        Passionate people building a better EV experience for Sri Lanka.
      </motion.p>

      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${memberDetails[index].photo})` }}
        />
      </AnimatePresence>

      <MotionUpDown initialY="-20vh" delay={0.5} duration={1}>
        {/* Main Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-10 
        w-[90%] sm:w-[450px] md:w-[650px]
        h-[400px] md:h-auto bg-white/20 shadow-[#0a0f2d]  
        p-4 sm:p-6 rounded-2xl border-[#0a0f2d]
        backdrop-blur-md mt-5 md:mt-60 ml-5 md:ml-0"
          >
            {/* TOP: Name + Image */}
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src={memberDetails[index].photo}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover"
              />
              <div>
                <h2 className="text-lg sm:text-xl font-bold">
                  {memberDetails[index].name}
                </h2>
                <p className="text-xs sm:text-sm opacity-70">
                  {memberDetails[index].designation}
                </p>
                <p className="flex text-sm mt-1">
                  <BsFacebook className="mr-2" />
                  <BsLinkedin />
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="mt-5 sm:mt-5">
              <hr />
              <p className="text-xs sm:text-sm mt-3 opacity-80 font-light">
                {memberDetails[index].para_1}
              </p>
              <p className="text-xs sm:text-sm mt-2 opacity-80 font-light">
                {memberDetails[index].para_2}
              </p>

              <div className="grid grid-cols-1 text-center items-center">
                <p className="text-xs sm:text-sm mt-3 opacity-80 font-semibold">
                  {memberDetails[index].para_3}
                </p>
                <div className="flex justify-center items-center">
                  <span
                    className="mt-1 text-center rounded-md ml-2 px-2 py-1
                text-[10px] sm:text-xs ring-2 bg-[#0a0f2d] text-white ring-[#0a0f2d]"
                  >
                    {memberDetails[index].badge}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </MotionUpDown>

      {/* Profile Circles */}
      <div className="relative z-10 flex flex-col items-center mt-3 sm:mt-5">
        <div className="flex gap-3 sm:gap-6 mb-6 sm:mb-8 opacity-80">
          {memberDetails.map((_, i) => (
            <button
              className={`btn btn-circle w-3 h-3 border-0 cursor-pointer
                 ${i === index ? "bg-white" : "bg-black"}`}
              onClick={() => setIndex(i)}
              onMouseOver={() => {
                setIndex(i);
                setTime(10000);
              }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
