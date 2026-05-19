// import { useState } from "react";

import { system } from "./theme";
import { PageContainer } from "./layouts/Container/PageContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginCard } from "./components/ui/LoginCard";
function App() {
<<<<<<< HEAD

=======
>>>>>>> f6e7ae4 (Corrigindo arquivos)
  return (
    <ChakraProvider value={system}>
      <PageContainer>
        <LoginCard />
      </PageContainer>
    </ChakraProvider>
  );
}

export default App;
