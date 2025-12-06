import { motion } from "framer-motion";
import type { ReactNode } from "react";
import ScrollManage from "../Scrolling/ScrollManage";

interface Props {
  children: ReactNode;
  index?: number;
  initialOpacity?: number;
  initialScale?: number;
  initialY: string;
  delay: number;
  duration: number;
  type?: "spring" | "decay" | "inertia" | "tween";
  stiffness?: 100 | 200 | 300 | 400 | 500;
}
const MotionUpDown = ({
  children,
  index,
  initialY,
  initialOpacity,
  initialScale,
  duration,
  delay,
  type,
  stiffness,
}: Props) => {
  return (
    <ScrollManage>
      <motion.div
        key={index}
        initial={{ opacity: initialOpacity, scale: initialScale, y: initialY }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: duration,
          delay: delay + 0.1 * index!,
          type,
          stiffness,
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </ScrollManage>
  );
};

export default MotionUpDown;
