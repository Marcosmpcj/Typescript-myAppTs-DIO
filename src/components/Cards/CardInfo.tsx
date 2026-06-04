import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainTitle: string;
  contentCard: string;
}

const CardInfo = ({ mainTitle, contentCard }: ICardInfo) => {
  return (
    <Box
      background="white"
      maxHeight="45vh"
      height="150px"
      w="100%"
      maxW="400px"
      p="20px 10px"
      borderRadius="xl"
      fontWeight="bold"
      textAlign="center"
    >
      <Text fontSize="xl" fontWeight="bold" mb="20px">
        {mainTitle}
      </Text>
      <Text fontSize="lg" fontWeight="normal">
        {contentCard}
      </Text>
    </Box>
  );
};

export default CardInfo;
