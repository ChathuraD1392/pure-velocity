import video from "../assets/video/background_video.mp4";
import { steps } from "./essentials/Card";

const About = () => {
  return (
    <>
      <div className="pt-20 top-20 mb-8">
        <section id="about" className="py-16 h-[40em]">
          <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Pure Velocity — Sri Lanka’s Home of Tesla Expertise
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Pure Velocity began with a simple idea: to bring world-class
                Tesla servicing to Sri Lanka.
              </p>

              <p className="mt-4 text-gray-700">
                Founded by Shanil and Dilin — two entrepreneurs, tech lovers,
                and unapologetic car addicts — PV has grown into a full-service
                Tesla workshop backed by global experience.
              </p>
              <p className="mt-4 text-gray-700">
                With Sanjeev leading operations on the ground, Dinesh
                maintaining standards and finances with military precision, and
                Rukshan powering customer support and admin, PV runs like a
                perfectly balanced EV drivetrain.
              </p>
              <p className="mt-4 text-gray-700">
                Our team is trained in advanced diagnostics, HV systems, battery
                troubleshooting, and software-level repair workflows used
                internationally.
              </p>
              <div className="mt-5">
                <span className="text-xs tracking-wider font-semibold bg-[#007bff] text-white p-2 rounded-md">
                  Our Philosophy
                </span>
                <div className="grid md:grid-cols-4 gap-6 mt-4 max-w-7xl mx-auto relative">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-xl shadow-lg relative border border-[#0a0f2d]"
                    >
                      {/* Number */}
                      <h3 className="text-4xl font-bold bg-linear-to-b from-[#0a0f2d] to-[#007bff] text-transparent bg-clip-text">
                        {step.element}
                      </h3>

                      {/* Title */}
                      <h4 className="mt-4 text-md font-semibold text-gray-900">
                        {step.title}
                      </h4>
                      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* <ul className="mt-6 space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#00ff99] font-bold">✓</span> Honest
                  work
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ff99] font-bold">✓</span>{" "}
                  Cutting-edge diagnostics
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ff99] font-bold">✓</span> Global
                  knowledge
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ff99] font-bold">✓</span> Local
                  trust
                </li>
              </ul> */}

              <p className="text-md mt-5 text-[#0a0f2d] bg-[#00ff99] p-3 rounded-lg">
                <span className="text-lg font-bold">Our Mission : </span>To
                become Sri Lanka’s most trusted and advanced Tesla service
                ecosystem, setting a new benchmark for EV maintenance,
                transparency, and customer care.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg bg-white h-full w-3xl">
              <span className="w-full object-cover">
                <video
                  autoPlay
                  // loop
                  muted
                  playsInline
                  className="inset-0 w-full h-full object-cover"
                >
                  <source src={video} type="video/mp4" />
                </video>
              </span>
            </div>
          </div>
        </section>
      </div>
      <div className="h-50"></div>
    </>
  );
};

export default About;
