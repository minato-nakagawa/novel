import { chakra } from "@chakra-ui/react";

type Props = {
  pathStroke?: string;
  strokeWidth?: string;
};

const IconNotification = (props: Props) => {
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
        d="M4,19 L4,9 C4,4.582 7.582,1 12,1 C16.418,1 20,4.582 20,9 L20,19 M1,19 L23,19 M15,19 L15,20 C15,21.657 13.657,23 12,23 C10.343,23 9,21.657 9,20 L9,19"
      ></path>
    </svg>
  );
};

IconNotification.defaultProps = {
  pathStroke: "#000",
  strokeWidth: "2",
};

export default chakra(IconNotification);
