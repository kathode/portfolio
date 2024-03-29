import { useEffect, useState } from "react";
import BreathingBlob from "../blob/BreathingBlob";
import { motion, useAnimation } from "framer-motion";
import "./Logo.css";
import { logo } from "../svg/svgpaths";
import SvgHub from "../svg/SvgHub";

const Logo = () => {
  const [hover, setHover] = useState(false);
  const controls = useAnimation();

  const draw = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 5 } } },
  };

  useEffect(() => {
    const animateSequence = async () => {
      await controls.start({ opacity: 0, transition: { duration: 0 } });
      await controls.start({ opacity: 1, transition: { duration: 3 } });
    };

    animateSequence();
  }, [controls]);

  useEffect(() => {
    if (hover) {
      document.documentElement.style.setProperty("--radius", "60svh");
      document.documentElement.style.setProperty("--opacity", "1");
    } else {
      document.documentElement.style.setProperty("--radius", "0svw");
      document.documentElement.style.setProperty("--opacity", "0");
    }
  });

  return (
    <div className="flex justify-center items-center h-[100svh] w-[100svw] relative bg-[#151b1d]">
      <div className={`p-[4em] rounded-full ${hover && "z-10"}`} onMouseLeave={() => setHover(false)}>
        <SvgHub />
      </div>
      <BreathingBlob size={"40svh"} duration={20} hover={hover} />
      <div className="test h-max-[400px] w-[291.53px] absolute rounded-full z-10" onMouseEnter={() => setHover(true)}>
        <motion.svg viewBox="-3.907 25.388 32.55 44.66" animate={controls}>
          <motion.path d={logo} variants={draw} fill="#ff847c" />
        </motion.svg>
      </div>
    </div>
  );
};

export default Logo;
