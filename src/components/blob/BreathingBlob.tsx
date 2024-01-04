import { motion } from "framer-motion";
import { blobs1, blob2, blob3, blob4, blob5, blob6 } from "./blobs";

type Props = {
  size: string;
  fill?: string;
  duration?: number;
  hover?: boolean;
};

const BreathingBlob = (props: Props) => {
  const { size, fill = "#2a363b", duration = 20, hover = false } = props;

  return (
    <svg
      viewBox="0 0 900 900"
      width={size}
      height={size}
      style={{
        ...(hover && {
          filter: "drop-shadow(0 0 3em #ffb4af)",
        }),
      }}
    >
      <g transform="translate(454.81072117472434 482.63282018887986)">
        <motion.path
          className="logo"
          fill={fill}
          d={blob2}
          animate={{
            d: [blobs1, blob2, blob3, blob4, blob5, blob6, blobs1],
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