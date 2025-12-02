import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  y?: number;
  duration: number;
  //   margin?: string;
}

const ScrollingOneSide = ({ children, y, duration }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        delay: 0,
        duration,
        stiffness: 400,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollingOneSide;
