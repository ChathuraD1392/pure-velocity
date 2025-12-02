import { motion } from "framer-motion";
import { BsTelephone } from "react-icons/bs";
import video from "../../../assets/images/dog.png";
import MapCard from "../MapCard";
import ScrollingOneSide from "../../Scrolling/ScrollingOneSide";

const Header_Contact = () => {
  return (
    <>
      <motion.section
        className="w-full h-[80em] relative"
        initial={{ opacity: 0, y: "-10vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
      >
        <div className="w-full h-[1100] overflow-hidden">
          <img src={video} alt="" className="inset-0 object-cover object-top" />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0a0f2d]/50"></div>
        {/* Hero Content */}
        <div
          className={`absolute z-10 grid grid-cols-4 text-white space-y-5 top-70 w-full`}
        >
          <div className="col-start-2 items-center text-center col-span-2 space-y-6">
            <ScrollingOneSide y={100} duration={1}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extralight leading-tight">
                Let us Help you
              </h1>
            </ScrollingOneSide>
            <ScrollingOneSide y={100} duration={1}>
              <p className="text-6xl">Visit Our Service Center!</p>
            </ScrollingOneSide>
            <ScrollingOneSide y={100} duration={1}>
              <button className="bg-[#00ff99] p-3 pl-7 pr-7 rounded-md text-[#0a0f2d] font-semibold inline-flex items-center">
                <BsTelephone className="mr-2 font-semibold" />
                Contact us Today
              </button>
            </ScrollingOneSide>
          </div>
          <div className="col-start-2 col-span-1 mr-5 mt-10">
            <ScrollingOneSide y={100} duration={1}>
              <MapCard
                height={500}
                width={90}
                title="Service Center"
                mobile="Tel: (+94) 11 234 5556"
                address={"75, Station Road, Kandana, Sri Lanka"}
                btnColor="#00ff99"
                textColor="#0a0f2d"
                opacity={50}
                backgroundColor="white"
                paraColor="#0a0f2d"
                footerColor="black"
                isBtnAvailable={true}
              />
            </ScrollingOneSide>
          </div>
          <div className="col-start-3 col-span-1 ml-5 mt-10">
            <ScrollingOneSide y={100} duration={1}>
              <MapCard
                height={500}
                width={100}
                title="Co-operate Office"
                mobile="Tel: (+94) 11 234 5556"
                address="11/3/2, Marine Drive, Wellawatte Colombo 06"
                btnColor="#00ff99"
                textColor="#0a0f2d"
                opacity={50}
                backgroundColor="white"
                paraColor="#0a0f2d"
                footerColor="black"
                isBtnAvailable={true}
              />
            </ScrollingOneSide>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Header_Contact;
