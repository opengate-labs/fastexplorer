import {
  Flex,
  Heading,
  Icon,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      alignItems='center'
      maxW='100vw'
      justifyContent='space-between'
      px={12}
      py={4}
    >
      <Heading color='teal.400' as={Link} to='/'>
        FastExplorer
      </Heading>
      <IconButton background='transparent' onClick={() => toggleColorMode()}>
        {colorMode === 'light' ? <FaMoon /> : <FaSun />}
      </IconButton>
    </Flex>
  );
}
