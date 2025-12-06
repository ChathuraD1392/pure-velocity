import { motion } from "framer-motion";
import { whyevs } from "../assets/data/whyevs";
import whyevs_image from "../assets/images/Model3Standard_89.jpg";
import background from "../assets/images/page_2137_b7a1265fed.svg";
import WEVCard from "./essentials/WhyEvComponents/WEVCard";
import ScrollingOneSide from "./Scrolling/ScrollingOneSide";

motion;
const Why_Evs = () => (
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
        src={whyevs_image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center pt-70 px-6 text-white space-y-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold"> Why EVs?</h1>
        <p className="max-w-3xl text-sm md:text-2xl font-light leading-relaxed text-white/80">
          The Future Isn’t Coming —{" "}
          <span className="text-white font-medium">
            It’s Parked in Your Garage
          </span>
        </p>
      </div>
    </motion.section>

    <motion.section
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.55, duration: 1.5, stiffness: 400 }}
      className="w-full overflow-visible relative"
    >
      <div className="w-full">
        <div className="w-full relative flex items-center justify-center">
          <img
            src={background}
            alt=""
            className="absolute w-full h-full object-cover hue-rotate-180 opacity-2 inset-0 stroke-[0.25]"
          />

          <div className="text-left max-w-8xl space-y-1 z-10 text-white mb-5 bg-white/60 h-full">
            {/* <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,123,255,0.2),rgba(0,0,0,0))]"></div> */}
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
              ></motion.h2>
              <h1 className="text-5xl font-bold mb-5 text-black text-center md:text-left">
                Why Electric Vehicles?
              </h1>
              <p className="p-2 text-lg text-black font-light rounded-lg mt-5 text-center md:text-left">
                Electric vehicles aren’t just a trend. They’re a worldwide shift
                in how we drive, maintain, and experience cars - and Sri Lanka
                is catching up fast. At Pure Velocity, we don’t just repair EVs.
                We’re here to educate, empower, and excite the next generation
                of drivers.
              </p>

              {whyevs.map((w) => (
                <WEVCard key={w.id} whyev={w} index={w.id} />
              ))}
              <ScrollingOneSide y={100} duration={1}>
                <div className="felx items-center justify-center text-center text-black mt-10 bg-blue-200/50 rounded-xl pt-5 pb-5 ml-1 mr-1">
                  <h1 className="font-semibold text-xl md:text-3xl">
                    <span>Pure Velocity</span> : Because Sri Lanka Deserves
                    World-Class EV Care
                  </h1>
                  <h4 className="font-light text-lg md:text-2xl mt-5">
                    We’re here to make the EV journey,
                  </h4>

                  <div className="text-center mt-2 mb-2">
                    <div className="text-center font-semibold">Easier,</div>
                    <div className="text-center font-semibold">Cheaper,</div>
                    <div className="text-center font-semibold">Smarter,</div>
                    <div className="text-center font-semibold">
                      And a lot more exciting...
                    </div>
                  </div>
                  <h4 className="font-light text-lg md:text-xl mt-5">
                    Whether you're already an EV owner or thinking about
                    switching -{" "}
                    <span className="font-bold">
                      you’re in the right place.
                    </span>
                  </h4>
                </div>
              </ScrollingOneSide>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  </>
);

export default Why_Evs;
