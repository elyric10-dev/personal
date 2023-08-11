import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SlidingElementProps {
  children: ReactNode;
  fromOpacity?: number;
  toOpacity?: number;
  fromScale?: number;
  toScale?: number;
  fromX?: number;
  toX?: number;
  fromY?: number;
  toY?: number;
  duration?: number;
  className?: string;
}

const SlidingElement = ({
  children,
  fromOpacity,
  toOpacity,
  fromScale,
  toScale,
  fromX,
  toX,
  fromY,
  toY,
  duration,
  className,
}: SlidingElementProps) => {
  return (
    <motion.div
      initial={{ opacity: fromOpacity, scale: fromScale, x: fromX, y: fromY }}
      animate={{ opacity: toOpacity, scale: toScale, x: toX, y: toY }}
      transition={{ duration: duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlidingElement;
