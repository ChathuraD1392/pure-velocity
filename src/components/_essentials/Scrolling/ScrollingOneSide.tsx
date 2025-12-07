import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  y?: number;
  duration: number;
  x?: number;
}

const ScrollingOneSide = ({ children, y, duration, x }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-3%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        delay: 0.25,
        duration,
        stiffness: 50,
        type: "spring",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollingOneSide;
