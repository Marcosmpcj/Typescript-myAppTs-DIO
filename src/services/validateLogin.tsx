import { api } from "../api";
import { changeLocalStorage } from "./storage";

interface IUserData {
  id: string;
  name: string;
  email: string;
  password: string;
  balance: number;
}

export const validateLogin = async (
  email: string,
  password: string,
  setIsLoggedIn: (value: boolean) => boolean,
): Promise<IUserData | null> => {
  const data: IUserData[] = (await api) as IUserData[];

  // validação
  const user = data.find((u) => u.email === email && u.password === password);

  // autorização de uso
  user && setIsLoggedIn(true);
  user && changeLocalStorage({ login: true });

  return user ?? null;
};

export default validateLogin;
