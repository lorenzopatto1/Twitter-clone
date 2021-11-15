import { useColorModeValue, Flex, useColorMode } from '@chakra-ui/react';

import { Header } from './components/Header';
import { Main } from './components/Main/Main';

function App() {
  const bg = useColorModeValue('#fff', '#000');

  const { colorMode } = useColorMode();

    const body = document.querySelector('body')!
    colorMode === "light" ? body.style.backgroundColor="#fff" : body.style.backgroundColor="#000";

  return (
    <Flex overflowX="hidden" bg={bg} h="100%" minH="100vh">
      <Header />
      <Main />
    </Flex>
  );
}

export default App;
