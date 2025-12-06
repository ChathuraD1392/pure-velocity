import { motion } from "framer-motion";
import { whyevs } from "../assets/data/whyevs";
import backgroundImage from "../assets/images/Model3Standard_89.jpg";
import background from "../assets/images/page_2137_b7a1265fed.svg";
import WEVCard from "./essentials/WhyEvComponents/WEVCard";
import ScrollingOneSide from "./Scrolling/ScrollingOneSide";
import ImageHeader from "./ImageHeader";
import MotionUpDown from "./Motion/MotionUpDown";

motion;
const Why_Evs = () => (
  <>
    <ImageHeader
      backgroundImage={backgroundImage}
      title="Why EVs?"
      text={
        <>
          The Future Isn’t Coming —{" "}
          <span className="text-white font-medium">
            It’s Parked in Your Garage
          </span>
        </>
      }
    />
    <div className="relative">
      <section id="contact" className="pt-5">
        <div className="pl-4 max-w-6xl mx-auto mb-5 justify-center items-center text-left overflow-hidden text-black">
          <img
            src={background}
            alt=""
            className="absolute w-full h-full object-cover hue-rotate-180 opacity-1.5 inset-0 stroke-[0.25]"
          />

          <div className="text-left max-w-8xl space-y-1 z-10 text-white mb-5 bg-white/60 h-full">
            <div className="z-10 max-w-6xl mx-auto px-1 sm:px-2 lg:px-2 mb-5">
              <MotionUpDown initialY="100vh" delay={1} duration={1}>
                <h2 className="text-black text-5xl font-bold text-center pt-5 pb-5"></h2>
                <h1 className="text-5xl font-bold mb-5 text-black text-center md:text-left">
                  Why Electric Vehicles?
                </h1>
                <p className="p-2 text-lg text-black font-light rounded-lg mt-5 text-center md:text-left">
                  Electric vehicles aren’t just a trend. They’re a worldwide
                  shift in how we drive, maintain, and experience cars - and Sri
                  Lanka is catching up fast. At Pure Velocity, we don’t just
                  repair EVs. We’re here to educate, empower, and excite the
                  next generation of drivers.
                </p>
              </MotionUpDown>
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
      </section>
    </div>
  </>
);

export default Why_Evs;
