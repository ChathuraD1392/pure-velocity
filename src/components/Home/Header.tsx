import { motion } from "framer-motion";
import { useContext } from "react";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { Link } from "react-router-dom";
import video from "../../assets/video/background_video.mp4";
import MenuContext from "../../StateManagement/contexts/menuContext";

const Header = () => {
  const { isMenuVisible } = useContext(MenuContext);
  const btnVariants = {
    initial: { opacity: 0, y: "-100vh" },
    animate: { opacity: 1, y: 0 },

    hover: {
      scale: 1.1,
      textShadow: "0px 0px 1px white",
      transition: {
        duration: 0.3,
      },
    },

    rest: {
      scale: 1,
      textShadow: "0px 0px 0px transparent",
      transition: {
        duration: 0.1,
      },
    },
  };

  const letters = Array.from("PURE VELOCITY");

  // Variants for each letter
  const letterVariant = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 4,
        delay: 3,
      },
    },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.section
        className="w-full min-h-[80vh] sm:min-h-screen overflow-hidden"
        initial={{ opacity: 0, y: "-10vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          // type: "spring",
          stiffness: 100,
        }}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
        {/* <img
          src={video}
          alt="video"
          className="absolute inset-0 min-h-[30em] md:w-full h-full object-cover "
        /> */}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0a0f2d]/40"></div>
        {/* Hero Content */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center h-auto text-center px-4 sm:px-6 lg:px-8 text-white space-y-5 pt-20 sm:pt-32 lg:top-20 top-10 md:top-20 ${
            isMenuVisible ? "opacity-45" : ""
          }`}
        >
          <motion.h1
            initial={{ opacity: 0, y: "2vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            className="text-2xl sm:text-3xl md:text-4xl font-extralight leading-tight"
          >
            Welcome to
          </motion.h1>
          <motion.h1
            className="text-5xl sm:text-8xl md:text-9xl font-[Belamor] font-extrabold leading-tight tracking-widest"
            initial="hidden"
            animate="visible"
          >
            {letters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariant}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: "5vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="mt-4 text-sm md:text-mg lg:text-xl font-extralight max-w-3xl tracking-wide"
          >
            Sri Lanka’s first specialist Tesla service , diagnostics, and repair
            ecosystem powered by cutting-edge tech, global expertise, and a team
            that eats, sleeps, and breathes
          </motion.p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-4 justify-center ">
            {/* <motion.button
              variants={btnVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="rest"
              onHoverEnd={() => {}}
            >
              <Link
                to="/services"
                className="hidden sm:inline-block px-9 py-3 rounded-md border border-white"
              >
                <div className="flex items-center text-center space-x-2 text-md text-white font-medium">
                  <HiOutlineCog6Tooth className="text-2xl" />
                  <span>Services</span>
                </div>
              </Link>
            </motion.button> */}
            <motion.button
              variants={btnVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="rest"
              onHoverEnd={() => {}}
            >
              <Link
                to="/contact"
                className="hidden sm:inline-block px-9 py-3 rounded-md border border-white"
              >
                <div className="flex items-center space-x-2 text-md text-white font-light">
                  <BsTelephone className="text-lg" />
                  <span>Contact</span>
                </div>
              </Link>
            </motion.button>
          </div>
        </div>
      </motion.section>
      {/* <Header_Team /> */}
    </>
  );
};

export default Header;
