import { motion } from "framer-motion";
import { BsArrowRightCircle } from "react-icons/bs";
import photo from "../../assets/images/Model3Standard_96.jpg";
import { Link } from "react-router-dom";
import ScrollingOneSide from "../_essentials/Scrolling/ScrollingOneSide";
const Header_About = () => {
  return (
    <>
      <section className="pt-30 relative w-full -mt-30 md:-mt-50">
        <div className="max-w-400 mx-auto px-4 md:px-10 mb-15 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
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
            <ScrollingOneSide y={100} duration={1}>
              <img
                src={photo}
                alt="photo"
                className="hidden md:block rounded-xl h-[500px] shadow-2xl shadow-black"
              />
            </ScrollingOneSide>
          </motion.div>
          <ScrollingOneSide y={100} duration={1}>
            <h2 className="text-2xl text-[#007bff] font-semibold pt-2 pb-2">
              ABOUT US
            </h2>
            <h1 className="text-2xl md:text-4xl font-semibold text-[#0a0f2d] mt-2 mb-2">
              We’re a name you can trust!
            </h1>
            <p className="font-light text-[#0a0f2d] mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              blanditiis, quisquam eligendi corrupti molestias eius quia beatae!
              Explicabo doloribus soluta at vel repellendus, tempore a
              laboriosam minima architecto voluptatibus. Voluptatum a molestias
              dolorem animi! Consequuntur, quis, eaque magni voluptatem officia
              quos fugit sit vel illo mollitia molestiae laudantium aperiam cum.
            </p>
            <div className="mt-1">
              <button className="bg-[#007bff] p-3 pr-8 pl-8 rounded-md text-white font-semibold inline-flex items-center cursor-pointer">
                <Link to="/about"> Read More</Link>
                <BsArrowRightCircle className="ml-2 font-semibold" />
              </button>
            </div>
          </ScrollingOneSide>
        </div>
      </section>
    </>
  );
};

export default Header_About;
