import { BsFillTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import backgroundImage from "../../assets/images/Model3Standard_91.jpg";
import Form from "../_essentials/Form";
import MapCard from "../_essentials/MapCard";
import ImageHeader from "../_essentials/ImageHeader";
import SectionHeader from "../_essentials/SectionHeader";
import MotionUpDown from "../_essentials/Motion/MotionUpDown";
import ScrollingOneSide from "../_essentials/Scrolling/ScrollingOneSide";

const Contact = () => {
  return (
    <>
      <ImageHeader
        backgroundImage={backgroundImage}
        title="Get in Touch With Us"
        text={
          <>
            Whether your Tesla{" "}
            <span className="text-white font-medium">
              needs a quick check-up
            </span>{" "}
            or a{" "}
            <span className="text-white font-medium">
              full diagnostic deep dive
            </span>
            , our expert team is here to{" "}
            <span className="text-white font-medium">help.</span>
          </>
        }
      />

      <SectionHeader>
        <MotionUpDown initialY="100vh" delay={1} duration={1}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How to find us
          </h1>

          <h4 className="text-md md:text-lg font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quia
            incidunt et corporis tempora in, repudiandae eos! Sequi, repudiandae
            minima dicta atque illo aperiam voluptatem accusamus neque eaque
            perferendis illum nemo ducimus amet consequatur nobis odit nihil
            quibusdam recusandae sapiente?
          </h4>
        </MotionUpDown>

        <div className="max-w-6xl mx-auto grid grid-col-1 lg:grid-cols-2 gap-1 justify-center items-center text-left overflow-hidden mt-10">
          <div className="h-full">
            <ScrollingOneSide y={100} duration={1}>
              <div className="p-1">
                <h1 className="text-md md:text-2xl font-bold w-[380px] ml-25 md:ml-0 p-2 text-black rounded">
                  Co-operate Office
                </h1>
                <div className="mt-3 space-y-3 border ml-25 md:ml-0 w-[280px] md:w-[380px] p-5 rounded-md shadow-xl">
                  <p className="flex items-center text-sm">
                    <BsFillTelephoneFill className="mr-3 text-md md:text-xl" />{" "}
                    +94 XXXXXXXX
                  </p>
                  <p className="flex items-center text-sm">
                    <FaLocationDot className="mr-3 text-md md:text-xl" />{" "}
                    11/3/2, Marine Drive, Wellawatte Colombo 06
                  </p>
                  <p className="flex items-center text-sm">
                    <MdEmail className="mr-3 text-md md:text-xl" />
                    headoffice@purevelocity.lk
                  </p>
                  <p className="flex items-start text-sm">
                    <FaClock className="mr-3 text-md md:text-xl" />
                    Mon - Fri: 10am - 8pm Sat - Sun <br /> Public Holidays: 10am
                    - 7pm
                  </p>
                </div>
              </div>
            </ScrollingOneSide>
            <ScrollingOneSide y={100} duration={1}>
              <div className="p-1">
                <h1 className="text-md md:text-2xl font-bold w-[380px] ml-25 md:ml-0 p-2 text-black rounded">
                  Service Center
                </h1>
                <div className="mt-3 space-y-3 border ml-25 md:ml-0 w-[280px] md:w-[380px] p-5 rounded-md shadow-xl">
                  <p className="flex items-center text-sm">
                    <BsFillTelephoneFill className="mr-3 text-xl" /> +94
                    XXXXXXXX
                  </p>
                  <p className="flex items-center text-sm">
                    <FaLocationDot className="mr-3 text-xl" /> 75, Station Road,
                    Kandana, Sri Lanka
                  </p>
                  <p className="flex items-center text-sm">
                    <MdEmail className="mr-3 text-xl" />
                    headoffice@purevelocity.lk
                  </p>
                  <p className="flex items-start text-sm">
                    <FaClock className="mr-3 text-xl" />
                    Mon - Fri: 10am - 8pm Sat - Sun <br /> Public Holidays: 10am
                    - 7pm
                  </p>
                </div>
              </div>
            </ScrollingOneSide>
          </div>
          <div className="h-full p-2 rounded-lg">
            <div id="mapsection w-full">
              <ScrollingOneSide y={100} duration={1}>
                <MapCard
                  height={500}
                  width={"full"}
                  btnColor="#00ff99"
                  textColor="#0a0f2d"
                  opacity={100}
                  backgroundColor="white"
                  paraColor="#0a0f2d"
                  footerColor="white"
                  isBtnAvailable={false}
                />
              </ScrollingOneSide>
            </div>
          </div>
        </div>
        <div className=" max-w-6xl mx-auto mt-10 grid grid-cols-1 gap-1 justify-center items-center text-left overflow-hidden text-black">
          <h2></h2>
          <div className="mr-2">
            <ScrollingOneSide y={100} duration={1}>
              <Form />
            </ScrollingOneSide>
          </div>
        </div>
      </SectionHeader>
    </>
  );
};

export default Contact;
