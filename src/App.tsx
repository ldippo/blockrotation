import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import "./styles.css";

let baseAngle = 0;
export default function App() {
  const controls = useAnimationControls();

  React.useEffect(() => {
    const int = setInterval(() => {
      const angles = [baseAngle - 30, baseAngle, baseAngle + 30, baseAngle];

      controls.start({
        rotate: angles,
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
      style={{ backgroundColor: "red", width: 100, height: 100 }}
    />
  );
}
