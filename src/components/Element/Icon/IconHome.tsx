import { chakra } from "@chakra-ui/react";

type Props = {
  pathStroke?: string;
  strokeWidth?: string;
};

const IconHome = (props: Props) => {
  const { pathStroke, strokeWidth } = props;
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={pathStroke}
        strokeWidth={strokeWidth}
        d="M1 22V9.76a2 2 0 01.851-1.636l9.575-6.72a1 1 0 011.149 0l9.574 6.72A2 2 0 0123 9.76V22a1 1 0 01-1 1h-5.333a1 1 0 01-1-1v-5.674a1 1 0 00-1-1H9.333a1 1 0 00-1 1V22a1 1 0 01-1 1H2a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

IconHome.defaultProps = {
  pathStroke: "#000",
  strokeWidth: "2",
};

export default chakra(IconHome);
