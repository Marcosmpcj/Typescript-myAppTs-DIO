import { Box, Heading, VStack, Text } from "@chakra-ui/react";

export const LoginCard = ({ children }: any) => {
  return (
    <>
      <Box
        w="100%"
        maxW="420px"
        bg="#1E192C"
        p={8}
        borderRadius="2xl"
        boxShadow="2xl"
        border="1px solid"
        borderColor="whiteAlpha.100"
      >
        <VStack gap={6} align="stretch">
          {/*Header Card*/}
          <Box textAlign="center">
            <Heading size="xl" color="white" fontWeight="bold" mb={3}>
              Bem-vindo(a)
            </Heading>

            <Text color="gray.400" fontSize="sm">
              Faça login para continuar <br />
            </Text>
          </Box>

          {/*Form Card*/}
          <VStack gap={4} align="stretch">
            {children}
          </VStack>

          {/*Footer Card*/}
          <Text
            textAlign="center"
            fontSize="sm"
            color="gray.500"
            cursor="pointer"
            _hover={{
              color: "purple.300",
            }}
          >
            Esqueceu sua senha?
          </Text>
        </VStack>
      </Box>
    </>
  );
};
