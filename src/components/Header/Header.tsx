import { Box,Heading,Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box textAlign="center">
      <Heading size="xl" color="white" fontWeight="bold" mb={3}>
        Diobank
      </Heading>

      <Text color="gray.400" fontSize="sm">
        Faça login para continuar
      </Text>
    </Box>
  );
};
