import { motion } from "framer-motion";
import { blobs1, blob2, blob3, blob4, blob5, blob6 } from "../svg/svgpaths";

type Props = {
  size: string;
  fill?: string;
  duration?: number;
  hover?: boolean;
};

const blobs = [blobs1, blob2, blob3, blob4, blob5, blob6];

// Shuffle function
function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const BreathingBlob = (props: Props) => {
  const { size, fill = "#2a363b", duration = 20, hover = false } = props;

  // Shuffle blobs
  shuffle(blobs);
  // Ensure first and last blob are the same
  blobs.push(blobs[0]);

  return (
    <svg className={`svg-logo ${hover && "breathing-blob"}`} viewBox="0 0 900 900" width={size} height={size}>
      <g transform="translate(454.81072117472434 482.63282018887986)">
        <motion.path
          className="logo"
          fill={fill}
          d={blob2}
          animate={{
            d: blobs,
          }}
          transition={{
            duration: duration,
            ease: "easeInOut",
            yoyo: Infinity,
            repeat: Infinity,
          }}
        />
      </g>
    </svg>
  );
};

export default BreathingBlob;
