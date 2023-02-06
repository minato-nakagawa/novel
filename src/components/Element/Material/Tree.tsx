import { Box, Flex, chakra } from "@chakra-ui/react";

const Bough = chakra(({ ...props }) => {
  return (
    <Box
      clipPath="polygon(50% 0, 100% 100%, 50% 88%, 0 100%)"
      background={`
        linear-gradient(
          to right,
        rgba(51, 40, 99, 1) 0%,
        rgba(41, 29, 83, 1) 100%
        )`}
      {...props}
    />
  );
});

type Props = {
  size: number;
  pbottom: number;
  pright: number;
};

const Tree = (props: Props) => {
  const { size, pbottom, pright } = props;
  return (
    <Flex
      direction="column"
      position="absolute"
      align="center"
      bottom={`${pbottom * 4}px`}
      right={`${pright * 4}px`}
    >
      <Bough w={`${size * 1.6}em`} h={`${size * 1.4}em`} />
      <Bough w={`${size * 2.6}em`} h={`${size * 2.2}em`} mt={`${size * -0.6}em`} />
      <Bough w={`${size * 3.8}em`} h={`${size * 3}em`} mt={`${size * -1.2}em`} />
      <Bough w={`${size * 4.6}em`} h={`${size * 3.8}em`} mt={`${size * -1.8}em`} />
      <Box
        w={`${size * 0.4}em`}
        h={`${size * 4.6}em`}
        mt={`${size * -0.52}em`}
        background="#2e2059"
        position="relative"
        _before={{
          content: `""`,
          width: "0.25em",
          height: "2.4em",
          position: "absolute",
          left: "1em",
          bottom: "-1.7em",
          background: `linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.1) 30%,
            rgba(0, 0, 0, 0) 100%
          )`,
          transform: "rotate(-65deg)",
          borderRaidus: "0 40% 40% 0",
        }}
      />
    </Flex>
  );
};

export default chakra(Tree);
