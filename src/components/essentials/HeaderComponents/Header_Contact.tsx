import { motion } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";
import video from "../../../assets/images/dog.png";
import ScrollingOneSide from "../../Scrolling/ScrollingOneSide";
import MapPage from "../MapPage";

const Header_Contact = () => {
  return (
    <>
      <motion.section
        className="w-full h-[75em] relative bg-[#0a0f2d]"
        initial={{ opacity: 0, y: "-10vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
      >
        <div className="w-full overflow-hidden">
          <img src={video} alt="" className="inset-0 object-cover object-top" />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0a0f2d]/50"></div>
        {/* Hero Content */}
        <div className={`absolute z-10  text-white space-y-5 top-65 w-full`}>
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
                <BsFillTelephoneFill className="mr-2 font-semibold" />
                CONTACT US TODAY
              </button>
            </ScrollingOneSide>
          </div>
          <div className="flex items-center justify-center">
            <ScrollingOneSide y={100} duration={1}>
              <MapPage />
            </ScrollingOneSide>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Header_Contact;
