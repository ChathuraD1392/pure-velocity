import { motion } from "framer-motion";

const Header_Banner = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 1, y: "-5vh" }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.55, stiffness: 20 }}
        className={`bg-[#007bff] min-h-1/4 md:min-h-2/4 py-8 px-4 ${
          isScrolled ? "clip-slant" : "clip-slant"
        } relative -top-8 md:-top-12`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1, y: "-5vh" }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, stiffness: 20 }}
          className="max-w-7xl mx-auto py-20"

          // style={{ backgroundImage: `url(${photo})`, zIndex: 100 }}
        >
          <div className="text-center space-y-5">
            <h1 className="text-5xl md:text-8xl text-white font-medium">
              We specialise{" "}
              <span className="bg-[#0a0f2d]/70 p-4 rounded-lg font-semibold">
                100%
              </span>{" "}
              in Tesla vehicles, nothing else.
            </h1>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Header_Banner;
