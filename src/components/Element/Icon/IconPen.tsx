type Props = {
  pathStroke?: string;
  strokeWidth?: string;
  boxSize?: number;
};

const IconPen = (props: Props) => {
  const { pathStroke, strokeWidth, boxSize } = props;
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      color="blue.300"
      width={`${(boxSize as number) * 0.7}em`}
      height={`${(boxSize as number) * 0.7}em`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke={pathStroke}
        strokeWidth={strokeWidth}
        d="M7,21 L22,6 L18,2 L2,18 L5,21 L19,21 M6,14 L10,18"
      ></path>
    </svg>
  );
};

IconPen.defaultProps = {
  pathStroke: "#000",
  strokeWidth: "2",
  boxSize: 2,
};

export default IconPen;
