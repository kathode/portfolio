import { useState } from "react";
import * as SVG from "../svg/index.ts";
import "./SvgHub.scss";

type SvgComponents = { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> };
const SvgComponents: SvgComponents = SVG;
const svgKeys = Object.keys(SvgComponents);

const SvgHub = () => {
  const [hover, setHover] = useState(false);

  const pause = () => {
    setHover(true);
  };

  const play = () => {
    setHover(false);
  };

  return (
    <div className={`${hover ? "circle-container paused" : "circle-container"}`} style={{ animationPlayState: hover ? "paused" : "" }}>
      {svgKeys.map((svgKey) => {
        const SvgComponent = SvgComponents[svgKey];
        return <SvgComponent key={svgKey} onMouseEnter={pause} onMouseLeave={play} />;
      })}
    </div>
  );
};

export default SvgHub;
