import { Box, chakra, Text, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";

const Header = () => {
  return (
    <Box
      w="calc(100% - 20px)"
      h="220px"
      p={8}
      mt={4}
      borderRadius="xl"
      position="relative"
      aria-label="Header"
    >
      <Text fontSize="3xl" fontWeight="bold">
        小説管理
      </Text>
      <Text fontSize="xs" fontWeight="normal">
        投稿した小説を管理しています。
      </Text>
    </Box>
  );
};

const ListItem = () => {
  return (
    <>
      <Flex
        w="100%"
        minH="50px"
        border="1px solid #E2E8F0"
        bg="white"
        align="center"
        p={4}
        borderRadius="sm"
      >
        幽霊なんていない
      </Flex>
    </>
  );
};

const Novel = () => {
  return (
    <Box ml={4} css={style.novel}>
      <Header />
      <Flex direction="column" gap={4} css={style.content}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Flex>
    </Box>
  );
};

const style = {
  novel: css({
    width: "100%",
    overflow: "hidden",
  }),
  content: css({
    width: "calc(100% - 20px)",
    minHeight: "400px",
    margin: "12px 0 40px 0",
    padding: "48px 32px 0 32px",
    borderRadius: "xl",
  }),
};

export default Novel;
