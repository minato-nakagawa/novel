import { Flex } from "@chakra-ui/react";
import IconMoon from "@/components/Element/Icon/IconMoon";

type Props = {
  w?: number;
  h?: number;
  color?: string;
};

const MenuIconMoon = (props: Props) => {
  const { w, h, color } = props;
  return (
    <Flex w={`${w}em`} h={`${h}em`} borderRadius="md" align="center" justify="center" bg={color}>
      <IconMoon pathStroke="#fff" {...props} />
    </Flex>
  );
};

MenuIconMoon.defaultProps = {
  w: 2,
  h: 2,
  color: "purple.200",
};

export default MenuIconMoon;
