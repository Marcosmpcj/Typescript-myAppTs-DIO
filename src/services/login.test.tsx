// import { login } from "./login";

// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useContext: () => ({
//     isLoggedIn: true,
//   }),
// }));

// describe("Função de bem-vindo, ao efetuar o login", () => {
//   const mockEmail = "marcos@dio.bank";
//   const mockAlert = jest.fn();
//   window.alert = mockAlert;
//   it("Deve exibir um alert com boas vindas caso o email seja válido", async () => {
//     await login(mockEmail);
//     expect(mockAlert).toHaveBeenCalledWith("Bem vindo(a) marcos@dio.bank!");
//   });

//   it("Não deve exibir a mensagem de boas vindas sem o email", async () => {
//     await login(mockEmail);
//     expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo(a)!");
//   });

//   it("Deve exibir o erro caso o email sejá inválido", async () => {
//     await login("email@invalido.com");
//     expect(mockAlert).toHaveBeenCalledWith("Email inválido");
//   });
// });
