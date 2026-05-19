import { Flex, Box, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const PageContainer = ({ children }: ContainerProps) => {
  return (
    <Flex minH="100vh" bg="#140F1F" align="center" justify="center" px={4}>
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
          {children}
        </VStack>
      </Box>
    </Flex>
  );
};
