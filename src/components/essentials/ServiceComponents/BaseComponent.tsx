import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import type { Service } from "../../../assets/data/services";
import ImageHeader from "../../ImageHeader";
import MotionUpDown from "../../Motion/MotionUpDown";
import ScrollingOneSide from "../../Scrolling/ScrollingOneSide";
import SectionHeader from "../../SectionHeader";

const BaseComponent = ({ service }: { service: Service }) => {
  return (
    <>
      <ImageHeader
        backgroundImage={service.image}
        title={service.title}
        text={
          <>
            <button>
              <Link
                to="/contact"
                className="hidden sm:inline-block px-9 py-3 mt-3 rounded-md border bg-[#007bff] border-[#007bff]"
              >
                <div className="pl-3 pr-3 p-1 flex items-center space-x-2 text-md text-white text-xl">
                  <BsTelephone className="text-lg" />
                  <span>Contact us Today</span>
                </div>
              </Link>
            </button>
          </>
        }
      />

      <SectionHeader>
        <MotionUpDown initialY="100vh" delay={1} duration={1}>
          <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
          <h4 className="text-lg font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quia
            incidunt et corporis tempora in, repudiandae eos! Sequi, repudiandae
            minima dicta atque illo aperiam voluptatem accusamus neque eaque
            perferendis illum nemo ducimus amet consequatur nobis odit nihil
            quibusdam recusandae sapiente?
          </h4>
        </MotionUpDown>

        <ScrollingOneSide y={100} duration={1}>
          <div className="pl-4 max-w-6xl mx-auto mt-10 grid grid-cols-2 gap-1 justify-center items-center text-left overflow-hidden">
            <div className="mr-2">
              <ul className="space-y-5 ml-5 font-medium">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-center ">
                    <span className="font-semibold ml-5 rounded-lg p-2">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollingOneSide>
        <ScrollingOneSide y={100} duration={1}>
          <div className="pl-4 max-w-6xl mx-auto mt-10 mb-5 grid grid-cols-3 gap-1 justify-center items-center text-left overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-2xl h-[300px] p-3"
            />
            <img
              src={service.image}
              alt={service.title}
              className="rounded-2xl h-[300px] p-3"
            />
            <img
              src={service.image}
              alt={service.title}
              className="rounded-2xl h-[300px] p-3"
            />
          </div>
        </ScrollingOneSide>
      </SectionHeader>
    </>
  );
};

export default BaseComponent;
