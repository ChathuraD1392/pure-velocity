import { motion } from "framer-motion";
import type { ReactNode } from "react";
interface Props {
  backgroundImage: string;
  title: string;
  text: ReactNode;
}

const ImageHeader = ({ backgroundImage, title, text }: Props) => {
  return (
    <motion.section
      className="relative w-full min-h-[30em] md:min-h-[50em] overflow-hidden bg-amber-500"
      initial={{ opacity: 0, y: "-20vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 2,
        delay: 0.5,
        type: "spring",
        stiffness: 50,
      }}
    >
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center pt-70 px-6 text-white space-y-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="max-w-3xl text-sm md:text-2xl font-light leading-relaxed text-white/80">
          {text}
        </p>
      </div>
    </motion.section>
  );
};

export default ImageHeader;
