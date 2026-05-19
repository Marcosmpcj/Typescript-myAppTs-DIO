import { Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
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
  );
};
