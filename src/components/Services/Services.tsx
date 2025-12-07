import { Link } from "react-router-dom";
import { services } from "../../assets/data/services";
import backgroundImage from "../../assets/images/service.jpg";
import ImageHeader from "../_essentials/ImageHeader";
import SectionHeader from "../_essentials/SectionHeader";
import MotionUpDown from "../_essentials/Motion/MotionUpDown";
import ScrollingOneSide from "../_essentials/Scrolling/ScrollingOneSide";

const Services = () => {
  return (
    <>
      <ImageHeader
        backgroundImage={backgroundImage}
        title="Services & Repairs"
        text={
          <>
            We specialise <span className="text-white font-medium">100%</span>{" "}
            in Tesla vehicles - nothing else.
          </>
        }
      />

      <SectionHeader>
        <MotionUpDown initialY="100vh" delay={1} duration={1}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All Tesla services and Repairs
          </h1>
          <h4 className="text-md md:text-lg font-light mb-5 p-3 md:p-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quia
            incidunt et corporis tempora in, repudiandae eos! Sequi, repudiandae
            minima dicta atque illo aperiam voluptatem accusamus neque eaque
            perferendis illum nemo ducimus amet consequatur nobis odit nihil
            quibusdam recusandae sapiente?
          </h4>
        </MotionUpDown>
        <ScrollingOneSide y={100} duration={1}>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-4 mt-10">
            {services.map((service) => (
              <div
                className={`relative group col-span-${service.col} row-span-${
                  service.col
                } w-full h-full md:h-[${
                  246 * service.col!
                }px] rounded-lg overflow-hidden p-1 md:p-1`}
                key={service.id}
              >
                <Link
                  to={service.href!}
                  className="relative block h-full w-full rounded-lg overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover h-full w-full rounded-lg"
                  />

                  <div className="absolute inset-0 bg-black/45 rounded-lg transition-all duration-300"></div>

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
                    <h1 className="text-white text-lg md:text-xl lg:text-2xl font-semibold drop-shadow-lg m-3">
                      {service.title}
                      <span className="absolute text-sm mt-8 inset-x-0  p-3 text-white text-md font-light opacity-0 group-hover:opacity-80 translate-y-3 group-hover:translate-y-0 transition-all duration-300 text-center">
                        click for more details...
                      </span>
                    </h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </ScrollingOneSide>
      </SectionHeader>
    </>
  );
};

export default Services;
