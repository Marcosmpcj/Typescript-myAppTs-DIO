import { VStack, Field, InputGroup, Input } from "@chakra-ui/react";
import { Mail, Lock } from "lucide-react";
import { CustomButton } from "../ui/CustomButton";
import { loginWelcome } from "@/services/loginWelcome";

export const Form = () => {
  return (
    <VStack gap={4} align="stretch">
      {/* Email */}
      <Field.Root required>
        <Field.Label color="gray.300">E-mail</Field.Label>

        <InputGroup startElement={<Mail size={18} />}>
          <Input
            placeholder="Digite seu e-mail"
            size="lg"
            bg="whiteAlpha.50"
            border="1px solid"
            borderColor="whiteAlpha.200"
            color="white"
            pl="42px"
            _placeholder={{
              color: "gray.500",
            }}
            _hover={{
              borderColor: "purple.400",
            }}
            _focusVisible={{
              borderColor: "purple.500",
              boxShadow: "0 0 0 1px #805AD5",
            }}
          />
        </InputGroup>
      </Field.Root>

      {/* Password */}
      <Field.Root required>
        <Field.Label color="gray.300">Senha</Field.Label>

        <InputGroup startElement={<Lock size={18} />}>
          <Input
            type="password"
            placeholder="Digite sua senha"
            size="lg"
            bg="whiteAlpha.50"
            border="1px solid"
            borderColor="whiteAlpha.200"
            color="white"
            pl="42px"
            _placeholder={{
              color: "gray.500",
            }}
            _hover={{
              borderColor: "purple.400",
            }}
            _focusVisible={{
              borderColor: "purple.500",
              boxShadow: "0 0 0 1px #805AD5",
            }}
          />
        </InputGroup>
      </Field.Root>

      {/* Button */}
      <CustomButton onClick={loginWelcome} />
    </VStack>
  );
};
