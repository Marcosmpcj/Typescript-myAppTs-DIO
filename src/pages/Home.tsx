import { LoginCard } from "../components/Cards/LoginCard";
import { CustomButton } from "../components/Buttons/CustomButton";
import { Field, InputGroup, Input, Spinner } from "@chakra-ui/react";
import { Mail, Lock } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/Contexts/AppContext";
import validateLogin from "../services/validateLogin";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const { setIsLoggedIn } = useContext(AppContext);

  const handleLogin = async (): Promise<void> => {
    setIsLoading(true);

    const validateUser = await validateLogin(email, pass, setIsLoggedIn);

    if (validateUser) {
      navigate(`/conta/${validateUser.id}`);
    } else {
      setError("Email ou senha incorretos");
    }

    setIsLoading(false);
  };

  return (
    <LoginCard>
      {/* Email Input */}
      <Field.Root required>
        <Field.Label color="gray.300">E-mail</Field.Label>
        <InputGroup startElement={<Mail size={18} />}>
          <Input
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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

      {/* Password Input */}
      <Field.Root required>
        <Field.Label color="gray.300">Senha</Field.Label>

        <InputGroup startElement={<Lock size={18} />}>
          <Input
            value={pass}
            onChange={(event) => setPass(event.target.value)}
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
      {isLoading ? (
        <Spinner color="purple.400" size="lg" />
      ) : (
        <CustomButton onClick={handleLogin} />
      )}
    </LoginCard>
  );
};

export default Home;
