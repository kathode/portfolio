import { useState } from "react";
import BreathingBlob from "../blob/BreathingBlob";
import "./Logo.css";

const Logo = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex justify-center items-center h-[100vh]  relative">
      <BreathingBlob size={"450"} duration={20} hover={hover} />
      <img
        src="/logo.svg"
        alt="meatball-blob"
        className="react h-[400px] absolute"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </div>
  );
};

export default Logo;
