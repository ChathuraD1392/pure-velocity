import { motion } from "framer-motion";
import { whyevs } from "../assets/data/whyevs";
import backgroundImage from "../assets/images/Model3Standard_89.jpg";
import WEVCard from "./essentials/WhyEvComponents/WEVCard";
import ImageHeader from "./ImageHeader";
import MotionUpDown from "./Motion/MotionUpDown";
import ScrollingOneSide from "./Scrolling/ScrollingOneSide";
import SectionHeader from "./SectionHeader";

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
    <SectionHeader>
      <div className="text-left max-w-8xl space-y-1 z-10 mb-5 h-full">
        <div className="z-10 max-w-6xl mx-auto px-1 sm:px-2 lg:px-2 mb-5">
          <MotionUpDown initialY="100vh" delay={1} duration={1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-center md:text-left">
              Why Electric Vehicles?
            </h1>
            <p className="p-2 text-lg font-light rounded-lg mt-5 text-center md:text-left">
              Electric vehicles aren’t just a trend. They’re a worldwide shift
              in how we drive, maintain, and experience cars - and Sri Lanka is
              catching up fast. At Pure Velocity, we don’t just repair EVs.
              We’re here to educate, empower, and excite the next generation of
              drivers.
            </p>
          </MotionUpDown>
          {whyevs.map((w, index) => (
            <WEVCard key={index} whyev={w} index={w.id} />
          ))}
          <ScrollingOneSide y={100} duration={1}>
            <div className="felx items-center justify-center text-center mt-10 bg-blue-200/50 rounded-xl pt-5 pb-5 ml-1 mr-1">
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
              <h4 className="font-light text-lg md:text-xl mt-5 pl-3 pr-3 md:pr-0 md:pl-0">
                Whether you're already an EV owner or thinking about switching -{" "}
                <span className="font-bold">you’re in the right place.</span>
              </h4>
            </div>
          </ScrollingOneSide>
        </div>
      </div>
    </SectionHeader>
  </>
);

export default Why_Evs;
