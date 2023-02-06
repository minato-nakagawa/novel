import { Box, chakra } from "@chakra-ui/react";

const Moon = ({ ...props }) => {
  return (
    <Box
      w={16}
      h={16}
      borderRadius="full"
      bg="#f0ff8e"
      boxShadow={`
      0 0 0 10px rgba(255,255,255,.1),
      0 0 0 25px rgba(240,255,140,.04),
      0 0 0 40px rgba(240,255,140,.025),
      0 0 0 60px rgba(240,255,140,.025),
      10px 0 0 90px rgba(255,255,255,.01);
    `}
      {...props}
    ></Box>
  );
};

export default chakra(Moon);
