import validateLogin from "./validateLogin";

describe("validateLogin", () => {
  jest.mock("../api", () => {
    Promise.resolve([
      {
        id: "marcosmpcj",
        name: "Marcos Paulo",
        email: "marcos@dio.bank",
        password: "323940",
        balance: 1000,
      },
    ]);
  });
  let setIsLoggedIn: jest.Mock;

  beforeEach(() => {
    setIsLoggedIn = jest.fn();
  });

  it("Deve retornar o objeto do usuário verificando as credenciais deste com a api, chamando setIsLoggedIn(true) e changeLocalStorage({login:true}).", async () => {
    const user = await validateLogin(
      "marcos@dio.bank",
      "323940",
      setIsLoggedIn,
    );
    expect(user).not.toBeNull();
    expect(user?.email).toBe("marcos@dio.bank");
    expect(setIsLoggedIn).toHaveBeenCalledWith(true);
    expect(setIsLoggedIn).toHaveBeenCalledTimes(1);
  });

  it("Deve retornar null e não chamar setIsLoggedIn com credenciais erradas", async () => {
    const user = await validateLogin(
      "inexistente@dio.bank",
      "123456",
      setIsLoggedIn,
    );

    expect(user).toBeNull();
    expect(setIsLoggedIn).not.toHaveBeenCalled();
  });
});
