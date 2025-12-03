// Services.tsx
import { useState } from "react";
import type { Service } from "../assets/data/services";
import { services } from "../assets/data/services";
import Service_Card from "./essentials/Service_Card";
import MotionUpDown from "./Motion/MotionUpDown";
import { motion } from "framer-motion";

type Selected = {
  service: Service;
  x: number; // document x coordinate (center)
  y: number; // document y coordinate (center)
} | null;

const Services = () => {
  const [selected, setSelected] = useState<Selected>(null);

  // open modal at the center of the current viewport (document coordinates)
  const openAtViewportCenter = (service: Service) => {
    const x = window.scrollX + window.innerWidth / 2;
    const y = window.scrollY + window.innerHeight / 2;
    setSelected({ service, x, y });

    // optionally lock scroll:
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="relative">
      <section
        id="services"
        className="pb-16 pt-25 bg-[linear-gradient(135deg,rgba(0,123,255,0.2),rgba(0,0,0,0))]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
          <motion.h2
            initial={{ opacity: 0, y: "-10vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            className="text-5xl font-bold text-center"
          >
            Tesla Services & Repairs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: "-10vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            className="text-center mt-3 text-gray-600 text-3xl"
          >
            We specialise 100% in Tesla vehicles — nothing else.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, index) => (
              <MotionUpDown
                index={index}
                initialY="100vh"
                initialScale={0.5}
                delay={0.3}
                duration={1}
              >
                <Service_Card
                  service={s}
                  onOpen={() => openAtViewportCenter(s)}
                />
              </MotionUpDown>
            ))}
          </div>
        </div>

        {selected && (
          <div className="fixed inset-0 z-40" onClick={closeModal} aria-hidden>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          </div>
        )}

        {selected && (
          <div
            // position relative to document: top/left are in px (document coords)
            style={{
              position: "absolute",
              top: `${selected.y}px`,
              left: `${selected.x}px`,
              transform: "translate(-50%, -50%)",
              zIndex: 50,
              // ensure pointer events reach modal (backdrop is below with z-40)
            }}
          >
            <div className="shadow-2xl max-w-3xl w-[600px] grid grid-cols-1 border-2 border-white rounded-xl bg-[#0a0f2d] overflow-hidden">
              <button
                className=" bg-[#0a0f2d] btn btn-circle absolute top-3 right-3 text-2xl inline-flex items-center justify-center text-white cursor-pointer"
                onClick={closeModal}
              >
                ×
              </button>
              <img
                src={selected.service.image}
                alt={selected.service.title}
                className="w-full h-fit rounded-t-lg border-[#0a0f2d] border"
              />
              <MotionUpDown initialY="-5vh" delay={0.3} duration={0.5}>
                <h1 className="text-white text-center text-2xl font-bold pt-3 underline underline-offset-4">
                  {selected.service.title}
                </h1>

                <div className="grid grid-cols-6 bg-[#0a0f2d] rounded-b-lg">
                  <div className="pb-3 rounded-b-lg col-start-2 col-span-4">
                    <ul className="mt-3 ml-5 text-sm space-y-2 text-white ">
                      {selected.service.bullets.map((b) => (
                        <li className="gap-2 ">
                          <span className="text-green-600 font-bold mr-3">
                            ✓
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MotionUpDown>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Services;
