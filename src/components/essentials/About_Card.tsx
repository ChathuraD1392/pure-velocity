import { motion } from "framer-motion";
import MotionUpDown from "../Motion/MotionUpDown";
import type { ReactNode } from "react";
import { div } from "framer-motion/client";

interface Props {
  element: ReactNode;
  title: string;
  text: string;
}

const About_Card = ({ element, title, text }: Props) => {
  return (
    <MotionUpDown
      initialY={"0"}
      delay={0.5}
      duration={1}
      type="spring"
      stiffness={200}
    >
      <div
        className="group p-4 rounded-xl shadow-2xl relative text-white
                 bg-[#007bff] duration-500 h-full hover:bg-[#0a0f2d]/90 hover:scale-105"
      >
        <h3
          className="text-4xl font-bold bg-clip-text 
                     group-hover:text-white"
        >
          {element}
        </h3>

        <h4 className="mt-4 text-md text-white font-semibold group-hover:text-white">
          {title}
        </h4>

        <p className="mt-4 text-sm text-white leading-relaxed group-hover:text-white">
          {text}
        </p>
      </div>
    </MotionUpDown>
  );
};

export default About_Card;
