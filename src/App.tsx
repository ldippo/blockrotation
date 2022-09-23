import React, { useMemo } from "react";
import { motion, useAnimationControls } from "framer-motion";
import "./styles.css";

// A red box with dimension 100x100
// Box starts with a angle state of 0
// Animation cycle is 1 second
// Each second the base angle increases by 30deg
// Animation includes scaleXY 1 -> 1.25 -> 1
// Animation includes base - 30 -> base -> base + 30 -> base

// let baseAngle = 0;
const createFilter = (angle: number) => `hue-rotate(${angle}deg)`;
const arr = new Array(9).fill(null);
export default function App() {
  const controls = useAnimationControls();
  let baseAngle = React.useRef(0);

  React.useEffect(() => {
    const int = setInterval(() => {
      const angles = [
        baseAngle.current - 30,
        baseAngle.current,
        baseAngle.current + 30,
        baseAngle.current
      ];
      const scale = [1, 1.25, 1];
      controls.start({
        rotate: angles,
        scale,
        transition: {
          duration: 1
        },
        filter: createFilter(baseAngle.current)
      });
      baseAngle.current += 30;
    }, 1000);
    return () => clearInterval(int);
  }, [controls]);

  return (
    <div className="grid-container">
      {arr.map((c, idx) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <motion.div
            key={idx}
            animate={controls}
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100
            }}
          />
        </div>
      ))}
    </div>
  );
}
