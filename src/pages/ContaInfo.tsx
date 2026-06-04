import { Text, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContaInfo = () => {
  return (
    <Stack direction="column" textAlign="center">
      <Text color="white" fontSize="2xl">
        Informações da conta
      </Text>
      <Link to="/conta/marcosmpcj">
        <Text color="white" fontSize="xl" _hover={{ color: "purple.400" }}>
          conta
        </Text>
      </Link>
    </Stack>
  );
};

export default ContaInfo;
