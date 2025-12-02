import { motion } from "framer-motion";
import contact from "../assets/images/Model3Standard_91.jpg";
import MapCard from "./essentials/MapCard";
import ScrollEffect from "./Scrolling/ScrollEffect";

const Contact = () => {
  return (
    <>
      <motion.section
        className="relative w-full min-h-[30em] md:min-h-[45em]  overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          // type: "spring",
          stiffness: 100,
        }}
      >
        <img
          src={contact}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Hero Content */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center h-auto text-center px-6 md:px-4 lg:px-8 text-white space-y-5 py-32 md:py-25 top-10 md:top-25`}
        >
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Get in Touch With Us
          </h1>
          <p className="mt-4 text-sm md:text-md lg:text-2xl font-extralight max-w-3xl tracking-wide">
            <span>
              Whether your Tesla{" "}
              <span className="text-white/90 font-semibold">
                needs a quick check-up
              </span>{" "}
              or a{" "}
              <span className="text-white/90 font-semibold">
                full diagnostic deep dive
              </span>
              , our team is here to
              <span className="text-white/90 font-semibold"> help</span>.
            </span>
          </p>
        </div>
      </motion.section>
      <div className="relative top-10 mb-8">
        <section id="contact" className="py-4">
          <div className="w-full mx-auto px-4 sm:px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 items-start mb-5">
            <div>
              <div className="ml-3 mb-2">
                <h1 className="text-lg font-bold">Our Service Center</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  repudiandae incidunt velit id eligendi, cupiditate voluptatem
                  ad deleniti totam dolore.
                </p>
              </div>
              <ScrollEffect y={100} duration={0.5}>
                <MapCard
                  height={500}
                  width={100}
                  title="Service Center"
                  mobile="Tel: (+94) 11 234 5556"
                  address={"75, Station Road, Kandana, Sri Lanka"}
                  btnColor="#00ff99"
                  textColor="#0a0f2d"
                  opacity={50}
                  backgroundColor="white"
                  paraColor="#0a0f2d"
                  footerColor="white"
                  borderColor="black"
                  isBtnAvailable={false}
                />
              </ScrollEffect>
            </div>
            <div className="h-full">
              <div className="ml-3 mb-2">
                <h1 className="text-lg font-bold">Our Cooperate Office</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  repudiandae incidunt velit id eligendi, cupiditate voluptatem
                  ad deleniti totam dolore.
                </p>
              </div>
              <MapCard
                height={500}
                width={100}
                title="Service Center"
                mobile="Tel: (+94) 11 234 5556"
                address={"75, Station Road, Kandana, Sri Lanka"}
                btnColor="#00ff99"
                textColor="#0a0f2d"
                opacity={50}
                backgroundColor="white"
                paraColor="#0a0f2d"
                footerColor="white"
                isBtnAvailable={false}
              />
            </div>

            {/* <div className="rounded-2xl ">
              <div className="ml-3 mb-2">
                <h1 className="text-lg font-bold">Our Service Center</h1>
              </div>
              <form
                className="bg-white rounded-xl p-6 space-y-2 border border-slate-100 shadow-xl"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-2 leading-tight text-black">
                    Send us Your Thoughts
                  </h1>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border border-gray-100 shadow-sm p-2"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border border-gray-100 shadow-sm p-2"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Clarification
                  </label>
                  <textarea
                    className="mt-1 block w-full rounded-md border border-gray-100 shadow-sm"
                    rows={4}
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-md bg-[#007bff] border-0 text-white px-4 py-2 text-sm font-semibold"
                  >
                    <AiOutlineMail className="mr-2 font-medium" />
                    Send Message
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
