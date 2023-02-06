import { Box, Flex, HStack, Grid, GridItem } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

const Tag = ({ children }: Props) => (
  <GridItem
    w="100%"
    fontSize="xs"
    fontWeight="bold"
    p="1"
    rounded="md"
    color="blue.500"
    border="1px solid"
    textAlign="center"
  >
    {children}
  </GridItem>
);

export const CategoryList = () => {
  return (
    <Grid w="100%" p={4} bg="white" rounded="md" templateColumns="repeat(5, 1fr)" gap={4}>
      <Tag>すべて</Tag>
      <Tag>純文学</Tag>
      <Tag>恋愛</Tag>
      <Tag>現代ファンタジー</Tag>
      <Tag>ファンタジー</Tag>
      <Tag>歴史・時代</Tag>
      <Tag>ミステリー</Tag>
      <Tag>青春・学園</Tag>
      <Tag>グルメ・レシピ</Tag>
      <Tag>スポーツ</Tag>
      <Tag>ノンフィクション</Tag>
      <Tag>日記ノベル</Tag>
      <Tag>その他</Tag>
    </Grid>
  );
};
