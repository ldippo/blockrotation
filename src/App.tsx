import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import "./styles.css";

// A red box with dimension 100x100
// Box starts with a angle state of 0
// Animation cycle is 1 second
// Each second the base angle increases by 30deg
// Animation includes scaleXY 1 -> 1.25 -> 1
// Animation includes base - 30 -> base -> base + 30 -> base

let baseAngle = 0;
export default function App() {
  const controls = useAnimationControls();

  React.useEffect(() => {
    const int = setInterval(() => {
      const angles = [baseAngle - 30, baseAngle, baseAngle + 30, baseAngle];
      const scale = [1, 1.25, 1];
      controls.start({
        rotate: angles,
        scale,
        transition: {
          duration: 1
        }
      });
      baseAngle += 30;
    }, 1000);
    return () => clearInterval(int);
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      style={{ backgroundColor: "red", width: 100, height: 100, margin: 200 }}
    />
  );
}
