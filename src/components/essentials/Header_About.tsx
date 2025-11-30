import { motion } from "framer-motion";
import { BsArrowRightCircle } from "react-icons/bs";
import photo from "../../assets/images/Model3Standard_85.jpg";
const Header_About = () => {
  return (
    <>
      <section className="pt-30 relative w-full -mt-50">
        <div className="max-w-400 mx-auto px-10 mb-15 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
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
          >
            <img src={photo} alt="photo" className="rounded-xl h-[500px]" />
          </motion.div>
          <motion.div
            className="grid text-center md:text-left space-y-4 md:mr-40"
            initial={{ opacity: 0, scale: 1, y: "-5vh" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.55, stiffness: 20 }}
          >
            <h2 className="text-2xl text-[#007bff] font-semibold">ABOUT US</h2>
            <h1 className="text-4xl font-semibold">
              We’re a name you can trust!
            </h1>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              blanditiis, quisquam eligendi corrupti molestias eius quia beatae!
              Explicabo doloribus soluta at vel repellendus, tempore a
              laboriosam minima architecto voluptatibus. Voluptatum a molestias
              dolorem animi! Consequuntur, quis, eaque magni voluptatem officia
              quos fugit sit vel illo mollitia molestiae laudantium aperiam cum.
            </p>
            <div className="mt-1">
              <button className="bg-[#0a0f2d] p-2 pl-3 pr-3 rounded-lg text-white font-semibold inline-flex items-center">
                Read More
                <BsArrowRightCircle className="ml-2 font-semibold" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Header_About;
