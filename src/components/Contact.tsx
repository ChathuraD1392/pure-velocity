import { motion } from "framer-motion";
import contact from "../assets/images/contact.avif";
import Map from "./essentials/Map";

const Contact = () => {
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
          src={contact}
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
            Get in Touch With Us
          </h1>
          <p className="mt-4 text-sm md:text-md lg:text-xl font-extralight max-w-3xl tracking-wide">
            <span>
              Whether your Tesla{" "}
              <span className="text-white/90 font-semibold">
                needs a quick check-up
              </span>{" "}
              or a{" "}
              <span className="text-white/90 font-semibold">
                full diagnostic deep dive
              </span>
              , our team is here to{" "}
              <span className="text-white/90 font-semibold"> help</span>.
            </span>
          </p>
        </div>
      </motion.section>
      <div className="relative top-10 mb-8">
        <section id="contact" className="py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <Map />
            </div>

            <div className="rounded-2xl">
              <div className="space-y-4 text-sm text-gray-700 mb-5 border border-slate-100 p-5 rounded-2xl bg-white">
                <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-7 leading-tight text-black">
                  Contact Details
                </h1>
                <p>
                  <strong>Hotline:</strong> +94 XXXXXXXX
                </p>
                <p>
                  <strong>Corporate Office:</strong> 11/3/2, Marine Drive,
                  Wellawatte Colombo 06
                </p>
                <p>
                  <strong>Service Centre:</strong> 75, Station Road, Kandana,
                  Sri Lanka
                </p>
                <p>
                  <strong>Email: </strong>
                  <a
                    href="mailto:headoffice@purevelocity.lk"
                    className="text-blue-600 underline"
                  >
                    headoffice@purevelocity.lk
                  </a>
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  We respond fast — usually within minutes.
                </p>
              </div>
              <form
                className="bg-white rounded-xl p-6 shadow-sm space-y-4 border border-slate-100"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-7 leading-tight text-black">
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
                    className="inline-flex items-center rounded-md bg-[#007bff] border-0 text-white px-4 py-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
