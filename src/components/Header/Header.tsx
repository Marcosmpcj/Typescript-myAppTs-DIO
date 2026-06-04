import { Flex, Box, Button, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import { changeLocalStorage } from "../../services/storage";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const logout = (): void => {
    setIsLoggedIn(false);
    changeLocalStorage({ login: false });
  };
  return (
    <Flex
      bg="#1E192C"
      height="8vh"
      align="center"
      p="0 2%"
      justify={!isLoggedIn ? "center" : "space-between"}
    >
      <Box>
        <Heading color="white" fontWeight="bold" fontSize="3xl">
          Diobank
        </Heading>
      </Box>
      {isLoggedIn && (
        <Button
          borderRadius="md"
          bg="purple.600"
          fontSize="md"
          size="sm"
          transition="0.2s"
          _hover={{
            bg: "purple.500",
            transform: "translateY(-2px)",
          }}
          _active={{
            transform: "scale(0.98)",
          }}
          onClick={() => logout()}
        >
          Sair
        </Button>
      )}
    </Flex>
  );
};
