import { chakra } from "@chakra-ui/react";

type Props = {
  pathStroke?: string;
  strokeWidth?: string;
  boxWidth?: number;
  boxHeight?: number;
};

const IconMoon = (props: Props) => {
  const { pathStroke, strokeWidth, boxWidth, boxHeight } = props;
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="0"
      viewBox="0 0 24 24"
      width={`${(boxWidth as number) * 0.7}em`}
      height={`${(boxHeight as number) * 0.7}em`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={pathStroke}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M9.874 5.008c2.728-1.68 6.604-1.014 8.25.197-2.955.84-5.11 3.267-5.242 6.415-.18 4.28 3.006 6.588 5.24 7.152-1.964 1.343-4.36 1.293-5.235 1.172-3.568-.492-6.902-3.433-7.007-7.711-.106-4.278 2.573-6.35 3.994-7.225z"
      ></path>
    </svg>
  );
};

IconMoon.defaultProps = {
  pathStroke: "#000",
  strokeWidth: "2",
  boxWidth: 2,
  boxHeight: 2,
};

export default chakra(IconMoon);
