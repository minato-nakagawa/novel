import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import { AppLayout } from "@/components/Layout";
import { CategoryList } from "@/components/Layout/CategoryList";
import { PickupNovelCard } from "@/components/Layout/PickupNovelCard";

const Top = () => {
  return (
    <AppLayout>
      <Box flex="1" pb={10}>
        <Box p={4}>
          <Text mt="4" mb="6" fontWeight="bold" fontSize="xl" color="blue.900">
            カテゴリ
          </Text>
          <CategoryList />
        </Box>
        <Box px={4}>
          <Text mt="10" mb="6" fontWeight="bold" fontSize="xl" color="blue.900">
            ピックアップ
          </Text>
          <Flex direction="column" gap={2}>
            <PickupNovelCard />
            <PickupNovelCard />
            <PickupNovelCard />
          </Flex>
        </Box>
      </Box>
      <Stack display={{ base: "none", xl: "block" }} flexBasis="420px" h="100vh" pt={4} pr={2}>
        <Text mt="4" mb="6" fontWeight="bold" fontSize="xl" color="blue.900">
          皆さんの反応
        </Text>
        <Box w="100%" h="100px" p={4} bg="white" rounded="md">
          ○○が面白かった
        </Box>
        <Box w="100%" h="100px" p={4} bg="white" rounded="md">
          ○○が面白かった
        </Box>
        <Box w="100%" h="100px" p={4} bg="white" rounded="md">
          ○○が面白かった
        </Box>
        <Box w="100%" h="100px" p={4} bg="white" rounded="md">
          ○○が面白かった
        </Box>
        <Box w="100%" h="100px" p={4} bg="white" rounded="md">
          ○○が面白かった
        </Box>
        <Box w="100%" h="100px" p={4} bg="white" rounded="md">
          ○○が面白かった
        </Box>
        <Box w="100%" h="100px" p={4} bg="white" rounded="md">
          ○○が面白かった
        </Box>
        <Box w="100%" h="100px" p={4} bg="white" rounded="md">
          ○○が面白かった
        </Box>
      </Stack>
    </AppLayout>
  );
};

export default Top;
