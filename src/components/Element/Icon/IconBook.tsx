import { chakra } from "@chakra-ui/react";

type Props = {
  pathStroke?: string;
  strokeWidth?: string;
};

const IconBook = (props: Props) => {
  const { pathStroke, strokeWidth } = props;
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke={pathStroke}
        strokeWidth={strokeWidth}
        d="M5,6 L1,4.5 L1,18.443038 L12,23 L23,18.443038 L23,4 L19,6 M5,16 L5,2 L12,5 L19,2 L19,16 L12,19 L5,16 Z M11.95,5 L11.95,19"
      ></path>
    </svg>
  );
};

IconBook.defaultProps = {
  pathStroke: "#000",
  strokeWidth: "2",
};

export default chakra(IconBook);
