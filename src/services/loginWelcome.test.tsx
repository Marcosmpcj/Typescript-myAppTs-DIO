import { loginWelcome } from "./loginWelcome";

describe("Função de bem-vindo, ao efetuar o login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  it("Deve exibir um alert com boas-vindas", () => {
    loginWelcome();
    expect(mockAlert).toHaveBeenCalled();
    expect(mockAlert).toHaveBeenCalledTimes(1);
    expect(mockAlert).toHaveBeenCalledWith("Bem vindo(a)!");
  });
});
