import { Box, Flex, HStack, chakra, Avatar, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import Moon from "@/components/Element/Material/Moon";
import Tree from "@/components/Element/Material/Tree";
import { useAuth } from "@/features/auth";
import MenuIconMoon from "@/components/Element/MenuIcon/MenuIconMoon";
import MenuIconBook from "@/components/Element/MenuIcon/MenuIconBook";
import IconPen from "@/components/Element/Icon/IconPen";

const HeaderWrap = chakra(({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <motion.div
      {...props}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.div>
  );
});

const MenuColumn = (props: {
  children: React.ReactNode;
  Icon: React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const { children, Icon, onClick } = props;
  return (
    <HStack
      w="100%"
      gap={2}
      pl={4}
      py={2}
      _hover={{ bg: "gray.200" }}
      cursor="pointer"
      transition="all 0.15s 0.01s ease"
      aria-label="MenuColumn"
      onClick={onClick}
    >
      {Icon}
      <Box>{children}</Box>
    </HStack>
  );
};

export const SideMenu = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <Flex
      aria-label="SideMenu"
      w="240px"
      minW="240px"
      h="100vh"
      flexDirection="column"
      borderRightRadius="xl"
      boxShadow="sm"
      overflow="hidden"
      position="sticky"
      top="0"
      zIndex={100}
    >
      <HeaderWrap
        aria-label="SideMenu-HeaderWrap"
        height="120px"
        display="flex"
        px={8}
        flexDirection="column"
        justifyContent="center"
        bgGradient="linear(to-b, #333467 0%, #256fa1 80%)"
        position="relative"
      >
        <Moon position="absolute" top={-6} left={-6} />
        <Tree size={0.4} pbottom={-2} pright={10} />
        <Tree size={0.3} pbottom={0} pright={20} />
        <Tree size={0.25} pbottom={-1} pright={45} />
        <Flex
          w="70px"
          h="70px"
          bg="white"
          justify="center"
          align="center"
          borderRadius="full"
          position="absolute"
          bottom="0%"
          left="50%"
          p={1}
          transform="translate(-50%, 50%)"
          overflow="hidden"
          zIndex={100}
        >
          <Avatar src={user.picture} size="lg" loading="lazy" icon={<Box bg="purple.900"></Box>} />
        </Flex>
      </HeaderWrap>
      <Box flex="1" w="100%" pt="72px" bg="white" aria-label="SideMenu-Contents">
        <Stack>
          <Text as="sub" color="blue.900" px={3} pb={3}>
            - MENU -
          </Text>
          <MenuColumn Icon={<MenuIconMoon color="blue.300" />}>
            <Text fontSize="sm" color="blackAlpha.800">
              夜空を見上げる
            </Text>
          </MenuColumn>
          <MenuColumn Icon={<MenuIconBook color="orange.300" />} onClick={() => navigate("/app")}>
            <Text fontSize="sm" color="blackAlpha.800">
              小説を探す
            </Text>
          </MenuColumn>
        </Stack>
        <Stack pt={10}>
          <Text as="sub" color="blue.900" px={3} pb={3}>
            - MYPAGE -
          </Text>
          <MenuColumn
            Icon={<IconPen boxSize={1.5} pathStroke="blue.300" />}
            onClick={() => navigate("/mypage/novel")}
          >
            <Text fontSize="sm" color="blackAlpha.800">
              小説を投稿する
            </Text>
          </MenuColumn>
        </Stack>
      </Box>
    </Flex>
  );
};
