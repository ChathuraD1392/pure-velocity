import type { ReactNode } from "react";
import MotionUpDown from "../Motion/MotionUpDown";

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
        className="w-[200px] p-4 rounded-xl shadow-2xl relative text-white hover:text-white
                 bg-[#0a0f2d]/40 duration-500 h-full hover:bg-[#0a0f2d] hover:scale-105 justify-self-center"
      >
        <h3 className="text-5xl font-light bg-clip-text">{element}</h3>

        <h4 className="mt-4 text-lg font-semibold ">{title}</h4>

        <p className="mt-4 text-sm leading-relaxed ">{text}</p>
      </div>
    </MotionUpDown>
  );
};

export default About_Card;
