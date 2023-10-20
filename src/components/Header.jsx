import { Flex, Heading, Icon, IconButton } from '@chakra-ui/react';
import { IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Flex
      alignItems='center'
      width='100vw'
      justifyContent='space-between'
      px={12}
      py={4}
    >
      <Heading color='teal.400' as={Link} to='/'>
        FastExplorer
      </Heading>
      <IconButton background='transparent'>
        <IoSettingsOutline />
      </IconButton>
    </Flex>
  );
}
