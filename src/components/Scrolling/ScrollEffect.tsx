import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  y?: number;
  duration: number;
}
const ScrollEffect = ({ children, y, duration }: Props) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0 && value < 1) {
      setInView(true);
    } else {
      setInView(false);
    }
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: y }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollEffect;
