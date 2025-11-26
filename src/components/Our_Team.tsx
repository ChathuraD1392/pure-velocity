import { motion } from "framer-motion";
import { memberDetails } from "../assets/data/team";
import our_team from "../assets/images/contact.avif";
import Ourteam_Card from "./essentials/Ourteam_Card";

const Our_Team = () => {
  return (
    <>
      <motion.section
        className="relative w-full min-h-[30em] md:min-h-[45em]  overflow-hidden"
        initial={{ opacity: 0, y: "-10vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          // type: "spring",
          stiffness: 100,
        }}
      >
        <img
          src={our_team}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Hero Content */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center h-auto text-center px-6 md:px-4 lg:px-8 text-white space-y-5 py-32 md:py-25 top-10 md:top-25`}
        >
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Our Team
          </h1>
          <p className="mt-4 text-md md:text-lg lg:text-2xl font-extralight max-w-3xl tracking-wide">
            <span>
              Passionate people building a better
              <span className="text-white/90 font-semibold">
                {" "}
                EV experience{" "}
              </span>
              for Sri Lanka.
            </span>
          </p>
        </div>
      </motion.section>

      <div className="relative top-2 md:top-6 lg:top-10 mb-8">
        <section id="team" className="py-2 md:py-4 lg:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {memberDetails.map((member) => (
                <Ourteam_Card member={member} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Our_Team;
