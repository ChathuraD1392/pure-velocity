import { useEffect, useState } from "react";
import { badgeColors, memberDetails } from "../assets/data/team";
import MotionUpDown from "./Motion/MotionUpDown";
import { AnimatePresence, motion } from "framer-motion";

export default function TeamCarousel() {
  const [index, setIndex] = useState(0);
  const [_, setFade] = useState(true);

  const cardVariants = {
    initial: { opacity: 0.5 },
    animate: { opacity: 1 },
    exit: { opacity: 0.5 },
  };

  const next = () => setIndex((i) => (i + 1) % memberDetails.length);
  const prev = () =>
    setIndex((i) => (i - 1 + memberDetails.length) % memberDetails.length);

  // Auto‑run every 3 seconds with fade effect
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        next(); // change index
        setFade(true); // fade in
      }, 600); // fade duration
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start pt-32 bg-gray-100 overflow-hidden">
      {/* Heading */}
      <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight">
        Our Team
      </h1>
      <p className="mt-4 text-md md:text-lg lg:text-3xl font-extralight max-w-3xl tracking-wide text-center">
        <span>
          Passionate people building a better
          <span className="font-semibold"> EV experience </span>
          for <span className="font-semibold">Sri Lanka.</span>
        </span>
      </p>

      {/* Background Big Image Black/White with Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index} // triggers new background on index change
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }} // maintain subtle opacity
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-fill grayscale"
          style={{
            backgroundImage: `url(${memberDetails[index].photo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      <MotionUpDown initialY="-20vh" delay={0.5} duration={1}>
        {/* Main Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index} // important: triggers re-render on index change
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-10 card w-[420px] h-[450px] bg-white shadow-xl p-6 rounded-2xl border-2 border-[#0a0f2d] transition-all duration-1000 mt-20 mb-5"
          >
            {/* Card content remains the same */}
            <div className="flex items-center gap-4">
              <img
                src={memberDetails[index].photo}
                className="w-20 h-20 rounded-xl object-cover transition-all duration-500"
              />
              <div>
                <h2 className="text-xl font-bold">
                  {memberDetails[index].name}
                </h2>
                <p className="text-sm opacity-70 text-slate-700">
                  {memberDetails[index].designation}
                </p>
              </div>
            </div>
            <div className="mt-5 h-[360px]">
              <hr />
              <p className="text-xs mt-4 opacity-80">
                {memberDetails[index].para_1}
              </p>
              <p className="text-xs mt-4 opacity-80">
                {memberDetails[index].para_2}
              </p>
              <div className="grid grid-cols-1 text-center items-center">
                <p className="text-xs mt-1 mb-1 opacity-80">
                  {memberDetails[index].para_3}
                </p>
                <div>
                  <span
                    className={`inline-flex items-center rounded-md mt-1 px-2 py-1 text-xs ring-2 ${
                      badgeColors[memberDetails[index].badge_color]
                    }`}
                  >
                    {memberDetails[index].badge}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-2">
              <button
                className="btn btn-circle bg-white text-[#0a0f2d] hover:bg-[#0a0f2d] hover:text-white"
                onClick={prev}
              >
                ←
              </button>
              <button
                className="btn btn-circle bg-white text-[#0a0f2d] hover:bg-[#0a0f2d] hover:text-white"
                onClick={next}
              >
                →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* <div className="relative z-10 card w-[420px] h-[450px] bg-white shadow-xl p-6 rounded-2xl border-2 border-[#0a0f2d] transition-all duration-1000 mt-20 mb-5">
          <div className="flex items-center gap-4">
            <img
              src={memberDetails[index].photo}
              className="w-20 h-20 rounded-xl object-cover transition-all duration-500"
            />
            <div className="">
              <h2 className="text-xl font-bold ">
                {memberDetails[index].name}
              </h2>
              <p className="text-sm opacity-70 text-slate-700">
                {memberDetails[index].designation}
              </p>
            </div>
          </div>
          <div className="mt-5 h-[360px]">
            <hr />
            <p className="text-xs mt-4 opacity-80">
              {memberDetails[index].para_1}
            </p>
            <p className="text-xs mt-4 opacity-80">
              {memberDetails[index].para_2}
            </p>
            <div className="grid grid-cols-1 text-center items-center">
              <p className="text-xs mt-1 mb-1 opacity-80">
                {memberDetails[index].para_3}
              </p>
              <div>
                <span
                  className={`inline-flex items-center rounded-md mt-1 px-2 py-1 text-xs ring-2 ${
                    badgeColors[memberDetails[index].badge_color]
                  }`}
                >
                  {memberDetails[index].badge}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-2">
            <button
              className="btn btn-circle bg-white text-[#0a0f2d] hover:bg-[#0a0f2d] hover:text-white"
              onClick={prev}
            >
              ←
            </button>
            <button
              className="btn btn-circle bg-white text-[#0a0f2d] hover:bg-[#0a0f2d] hover:text-white"
              onClick={next}
            >
              →
            </button>
          </div>
        </div> */}
      </MotionUpDown>

      {/* Small Floating Profile Circles */}
      <div className="relative z-10 flex flex-col items-center mt-1">
        <div className="flex gap-6 mb-8 opacity-80">
          {memberDetails.map((m, i) => (
            <img
              key={i}
              src={m.photo}
              className={`w-20 h-20 rounded-full object-cover p-1 transition-all duration-500 
              ${
                i === index
                  ? "scale-110 border-[#0a0f2d] border-4"
                  : "border-gray-500 opacity-60 border-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
