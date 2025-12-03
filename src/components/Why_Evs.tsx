import { motion } from "framer-motion";
import { whyevs } from "../assets/data/whyevs";
import WEV from "./essentials/WEV";
import background from "../assets/images/page_2137_b7a1265fed.svg";

motion;
const Why_Evs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1, y: "-10vh" }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 1.5, stiffness: 400 }}
      className="w-full overflow-visible relative"
    >
      <div className="w-full">
        <div className="w-full relative flex items-center justify-center pt-30">
          <img
            src={background}
            alt=""
            className="absolute w-full h-full object-cover hue-rotate-180 opacity-5 inset-0 stroke-[0.25]"
          />

          <div className="text-center space-y-1 z-10 text-white mb-20 bg-white/90 h-full">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,123,255,0.2),rgba(0,0,0,0))]"></div>
            <div className="z-10 max-w-6xl mx-auto px-1 sm:px-2 lg:px-2 mb-5">
              <motion.h2
                initial={{ opacity: 0, y: "-10vh" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                className="text-black text-5xl font-bold text-center pt-5 pb-5"
              >
                Why EVs?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: "-10vh" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                className="text-center text-gray-600 mt-2 text-3xl"
              >
                The Future Isn’t Coming - It’s Parked in Your Garage.
              </motion.p>

              <p className="p-2 bg-[#00ff99] text-black rounded-lg mt-5">
                Electric vehicles aren’t just a trend. They’re a worldwide shift
                in how we drive, maintain, and experience cars - and Sri Lanka
                is catching up fast. At Pure Velocity, we don’t just repair EVs.
                We’re here to educate, empower, and excite the next generation
                of drivers.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {whyevs.map((w, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 + index * 0.3,
                    }}
                    className="h-full"
                  >
                    <WEV item={w} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Why_Evs;
