import { Link } from "react-router-dom";
import video from "../assets/video/background_video.mp4";
import { useContext } from "react";
import MenuContext from "../StateManagement/contexts/menuContext";
import { motion } from "framer-motion";

const Header = () => {
  const { isMenuVisible } = useContext(MenuContext);
  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        //loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Hero Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-auto text-center px-4 sm:px-6 lg:px-8 text-white space-y-5 py-20 sm:py-32 lg:top-20 top-10 md:top-20 ${
          isMenuVisible ? "opacity-45" : ""
        }`}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extralight leading-tight">
          Welcome to
        </h1>
        <h1 className="text-5xl sm:text-8xl md:text-9xl font-[Belamor] font-extrabold leading-tight tracking-widest">
          <motion.span
            className="text-white"
            initial={{ opacity: 0, y: -250 }}
            animate={{ opacity: 1, y: -10 }}
          >
            PURE VELOCITY
          </motion.span>
        </h1>
        <p className="mt-4 sm:text-md md:text-xl lg:text-2xl max-w-3xl tracking-wide font-light">
          <span className="text-white/90 font-semibold ">
            Sri Lanka’s first specialist Tesla service
          </span>
          , diagnostics, and repair ecosystem powered by cutting-edge tech,
          global expertise, and a team that eats, sleeps, and breathes{" "}
          <span className="text-white/90 font-semibold">EVs.</span>
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 justify-center">
          <motion.button
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 2px rgb(255,255,255)",
            }}
          >
            <Link
              to="/services"
              className="px-8 py-3 bg-[#007bff] border border-[#007bff] text-white font-light rounded-md shadow text-sm"
            >
              Our Services
            </Link>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 4px rgb(255,255,255)",
            }}
          >
            <a
              href="#contact"
              className="px-9 py-3 border border-white rounded-md text-sm font-light"
            >
              Contact Us
            </a>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Header;
