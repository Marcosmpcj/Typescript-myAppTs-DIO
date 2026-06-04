import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const PageContainer = ({ children }: ContainerProps) => {
  return (
    <Flex minH="100vh" bg="#140F1F" align="center" justify="center" px={4}>
      {children}
    </Flex>
  );
};
