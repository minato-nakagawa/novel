import { Box, Divider, Text, Stack, Avatar } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

export const PickupNovelCard = () => {
  return (
    <Box w="100%" p={4} bg="white" rounded="md">
      <Text fontSize="md" fontWeight="bold" color="blue.800" pt={2} pb={3}>
        『 ちいさな君と、こえを遠くに 』
      </Text>
      <Text fontSize="sm" color="gray.600" pl="5" textAlign="justify" whiteSpace="pre-line">
        大人気バンド“Eternal Red”でボーカルをつとめていたものの、
        かつての声を失ってしまい、活動を休止した少年――藤波奏太。
        <br />
        遠くの地に転校し、ひとりの高校生として暮らそうとする奏太だが、
        そんな彼の前に、小学生の少女・ソラが現れ、こう言った――。
        <br />
        「わたしに声優になるためのレッスンをしてください！」
        <br />
        ソラの熱意に押され、ボイストレーニングを手伝うことになる奏太。
        <br />
        やがて、ソラの周囲の少女たちもレッスンに加わる。
        <br />
        こうして始まる、元ミュージシャンと声優志望の小学生たちの奇妙な師弟関係。
        <br />
        そして、ある個人製作アニメのオーディションが舞い込み……!?
        <br />
        ――これは、夢を諦めかけた少年と、夢に向かう少女たちの物語。
      </Text>
      <Divider my={4} />
      <Stack align="center" direction="row">
        <Avatar size="xs" />
        <Text fontSize="sm" color="gray.500">
          月槻ツキ
        </Text>
      </Stack>
    </Box>
  );
};
