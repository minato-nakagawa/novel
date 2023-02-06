import { Flex } from "@chakra-ui/react";
import IconBook from "@/components/Element/Icon/IconBook";

type Props = {
  w?: number;
  h?: number;
  color?: string;
};

const MenuIconBook = (props: Props) => {
  const { w, h, color } = props;
  return (
    <Flex w={`${w}em`} h={`${h}em`} borderRadius="md" align="center" justify="center" bg={color}>
      <IconBook pathStroke="#fff" {...props} />
    </Flex>
  );
};

MenuIconBook.defaultProps = {
  w: 2,
  h: 2,
  color: "orange.200",
};

export default MenuIconBook;
