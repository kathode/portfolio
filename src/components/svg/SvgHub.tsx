import { useState } from "react";
import * as SVG from "../svg/index.ts";
import "./SvgHub.scss";

type SvgComponents = { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> };
const SvgComponents: SvgComponents = SVG;
const svgKeys = Object.keys(SvgComponents);

const SvgHub = () => {
  const [hover, setHover] = useState({ bool: false, key: "" });

  const pause = (key: string) => {
    setHover({ bool: true, key: key });
  };

  const play = () => {
    setHover({ bool: false, key: "" });
  };

  return (
    <div className={`${hover.bool ? "circle-container paused" : "circle-container"}`} style={{ animationPlayState: hover.bool ? "paused" : "" }}>
      {svgKeys.map((svgKey) => {
        const SvgComponent = SvgComponents[svgKey];
        return (
          <div
            className="text-center text-white flex justify-center items-center flex-col relative"
            key={svgKey}
            onMouseEnter={() => pause(svgKey)}
            onMouseLeave={play}
          >
            <SvgComponent key={svgKey} />
            <div className="absolute bottom-[-25px]">{hover.bool && hover.key === svgKey && <>{svgKey}</>}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SvgHub;
