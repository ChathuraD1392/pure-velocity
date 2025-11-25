import p1 from "../assets/images/p1.jpeg";
import p2 from "../assets/images/p2.webp";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import our_team from "../assets/images/contact.avif";
import { motion } from "framer-motion";

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
          <p className="mt-4 text-sm md:text-md lg:text-xl font-extralight max-w-3xl tracking-wide">
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

      <div className="relative top-10 mb-8">
        <section id="team" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Shanil */}
              <div className="bg-white rounded-xl p-6 shadow-sm text-center border border-slate-100">
                <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                  <img
                    src={p1}
                    alt="Shanil Wijewardena"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-2xl mb-2">
                  Shanil Wijewardena
                </h4>
                <p className="text-sm font-bold text-gray-600">
                  Co-Founder / Growth, Technology & Finance Director
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  Shanil is the brains, calculator, and turbocharger behind Pure
                  Velocity. A lifelong Apple loyalist who breaks into hives at
                  the sight of Android, Shanil lives in a world of KPIs,
                  strategic roadmaps, and MacBook-fuelled late nights.
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  With over a decade of running multiple businesses, Shanil can
                  build systems with one hand and analyse a P&L with the other —
                  all while talking about Autopilot quirks, battery health, or
                  the next Tesla he’s planning to resurrect.
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  If Pure Velocity were a Tesla, Shanil is the,
                  <br />
                  <span className="inline-flex items-center rounded-md bg-red-400/10 mt-2 px-2 py-1 text-xs font-medium text-red-400 inset-ring inset-ring-red-400/20">
                    autopilot
                  </span>
                </p>
              </div>

              {/* Dilin */}
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                  <img
                    src={p2}
                    alt="Dilin Arambewela"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-2xl mb-2">
                  Dilin Arambewela
                </h4>
                <p className="text-sm font-bold text-gray-600">
                  Co-Founder / Growth, Sales & Operations Director
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  Dilin is the sales powerhouse of Pure Velocity — a man who
                  could sell snow to the Swiss and convince an Android user to
                  love… well, Android (because he certainly won’t be switching
                  to Apple anytime soon).
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  With years of entrepreneurial experience, Dilin brings
                  business instincts sharper than a Model S Plaid launch. He
                  builds partnerships, unlocks revenue streams, and somehow
                  always manages to close a deal before the customer even
                  finishes their sentence.
                  <p className="mt-3 text-sm text-gray-700">
                    If Pure Velocity were a Tesla, Dilin is the,
                    <br />
                    <span className="inline-flex items-center rounded-md bg-green-400/10 mt-2 px-2 py-1 text-xs font-medium text-green-400 inset-ring inset-ring-green-400/20">
                      ludicrous mode boost
                    </span>
                  </p>
                </p>
              </div>

              {/* Sanjeev */}
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                  <img
                    src={p3}
                    alt="Sanjeev Dassanayake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-2xl mb-2">
                  Sanjeev Dassanayake
                </h4>
                <p className="text-sm font-bold text-gray-600">
                  Managing Director
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  Sanjeev is the steady engine that keeps Pure Velocity moving.
                  With 20+ years of business experience and a lifelong obsession
                  with cars, he runs the workshop, now Sri Lanka’s best Tesla
                  repair centre.
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  He leads the service team, maintains quality, and gives
                  customers the confidence that their Teslas aren’t just being
                  repaired… they’re being understood. He’s part businessman,
                  part mechanic whisperer, part deal-maker.
                  <p className="mt-3 text-sm text-gray-700">
                    If Pure Velocity were a service centre, Sanjeev is the,
                    <br />
                    <span className="inline-flex items-center rounded-md bg-blue-400/10 mt-2 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/20">
                      dyno room
                    </span>
                  </p>
                </p>
              </div>

              {/* Dinesh */}
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                  <img
                    src={p4}
                    alt="Dinesh Wijewardena"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-2xl mb-2">
                  Dinesh Wijewardena
                </h4>
                <p className="text-sm font-bold text-gray-600">
                  Servicing & Finance Manager
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  Dinesh is the man who can look at a ledger and instantly spot
                  a missing rupee from a kilometre away. With deep automotive
                  knowledge and impeccable organisation, he’s the guardian of
                  inventory, finances, and service standards at PV.
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  He tracks every part, washer, bolt, labour hour, and bank
                  balance, and demands the same discipline from everyone around
                  him. If there’s something to be recorded, Dinesh has already
                  filed it… alphabetically.
                  <p className="mt-3 text-sm text-gray-700">
                    If Pure Velocity were an engine bay, Dinesh is the,
                    <br />
                    <span className="inline-flex items-center rounded-md bg-amber-400/10 mt-2 px-2 py-1 text-xs font-medium text-amber-400 inset-ring inset-ring-amber-400/20">
                      neatly routed wiring loom
                    </span>
                  </p>
                </p>
              </div>

              {/* Rukshan */}
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                  <img
                    src={p5}
                    alt="Rukshan Hewage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-2xl mb-2">Rukshan Hewage</h4>
                <p className="text-sm font-bold text-gray-600">
                  Sales, Support & Administration Manager
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  Rukshan may not know much about cars (yet), but he knows
                  everything about hard work, loyalty, customer service, and
                  showing up. Whether it's answering hotline calls, updating
                  Trello, handling customers, or managing content, he’s the
                  all-rounder every great business needs.
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  With a smile on standby and a work ethic that won’t quit, he’s
                  quickly becoming the unexpected star of Tesla customer support
                  in Sri Lanka.
                  <p className="mt-3 text-sm text-gray-700">
                    If Pure Velocity were a car interior, Rukshan is the,
                    <br />
                    <span className="inline-flex items-center rounded-md bg-purple-400/10 mt-2 px-2 py-1 text-xs font-medium text-purple-400 inset-ring inset-ring-purple-400/20">
                      wireless charger. Always ready, always reliable
                    </span>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Our_Team;
