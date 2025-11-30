import { motion } from "framer-motion";
import { services } from "../../assets/data/services";
import Header_Service_Card from "./Header_Service_Card";
const Header_Services = () => {
  return (
    <>
      <section className="h-fit">
        {/* <img
          src={photo}
          alt=""
          className="absolute w-full content-center filter invert hue-rotate-180 opacity-15 h-fit"
        /> */}
        <hr className="border border-white mt-20" />

        <div className="relative z-50 max-w-400 mx-auto px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="text-center space-y-3">
            <h2 className="text-2xl  text-[#007bff] font-semibold pt-10">
              OUR SERVICES
            </h2>
            <h1 className="text-4xl font-semibold text-white">
              If it has a battery, a motor, and a Tesla badge - we’ve got it
              covered.
            </h1>
          </div>
          <motion.div
            className="rounded-lg"
            initial={{ opacity: 0, y: "-10vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              // type: "spring",
              stiffness: 100,
            }}
          ></motion.div>
        </div>

        <div className="carousel w-full col-start-2 inline-flex mx-5 py-10">
          <Header_Service_Card service={services[1]} />
          <Header_Service_Card service={services[2]} />
          <Header_Service_Card service={services[3]} />
          <Header_Service_Card service={services[4]} />
        </div>
      </section>
    </>
  );
};

export default Header_Services;
