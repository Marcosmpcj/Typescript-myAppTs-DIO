import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react/styled-system";
import { system } from "@chakra-ui/react/preset";
import { PageContainer } from "./layouts/PageContainer";
import { AppContextProvider } from "./components/Contexts/AppContext";
import { Header } from "./components/Header/Header";
import MainRoutes from "./routes";
import { createLocalStorage, getAllLocalStorage } from "./services/storage";

function App() {
  !getAllLocalStorage() && createLocalStorage();

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider value={system}>
          <Header />
          <PageContainer>
            <MainRoutes />
          </PageContainer>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
