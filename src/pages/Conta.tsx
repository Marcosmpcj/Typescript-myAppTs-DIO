import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardInfo from "../components/Cards/CardInfo";
import { Center, Spinner, Stack } from "@chakra-ui/react";
import { api } from "../api";
import formatDateHour from "../services/formatDateHour";
import { AppContext } from "../components/Contexts/AppContext";

interface IUserData {
  name: string;
  email: string;
  password: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AppContext);
 
  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const dataList: IUserData[] = (await api) as IUserData[];

      // Filtra direto na lista pelo id da URL
      const user = dataList.find((user) => user.id === id);

      if (user) {
        setUserData(user); // Salva apenas o usuário correto
      } else {
        navigate("/"); // Usuário não encontrado, volta pro login
      }
    };

    getData();
  }, [id, navigate]);

  return (
    <Stack direction="row" gap="4rem" alignItems="center" justify="center">
      {userData === null ? (
        <Center>
          <Spinner color="white" size="lg" />
        </Center>
      ) : (
        <>
          <CardInfo
            mainTitle={`Bem vindo ${userData.name}`}
            contentCard={formatDateHour()}
          />
          <CardInfo
            mainTitle="Saldo"
            contentCard={`R$${userData.balance.toFixed(2)}`}
          />
        </>
      )}
    </Stack>
  );
};

export default Conta;
