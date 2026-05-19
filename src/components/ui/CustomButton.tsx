import { Button } from "@chakra-ui/react";

interface ButtonProps {
  onClick: () => void;
}

export const CustomButton = ({ onClick }: ButtonProps) => {
  return (
    <Button
      size="lg"
      bg="purple.600"
      color="white"
      mt={2}
      // loading={loading}
      loadingText="Entrando..."
      spinnerPlacement="start"
      onClick={onClick}
      transition="0.2s"
      _hover={{
        bg: "purple.500",
        transform: "translateY(-2px)",
      }}
      _active={{
        transform: "scale(0.98)",
      }}
    >
      Entrar
    </Button>
  );
};
