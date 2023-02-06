import { Box, Flex } from "@chakra-ui/react";
import { SideMenu } from "@/components/Layout/SideMenu";

type Props = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return (
    <Flex bg="gray.100">
      <SideMenu />
      {children}
    </Flex>
  );
};
