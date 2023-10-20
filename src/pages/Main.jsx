import Header from '../components/Header';
import { Container } from '@chakra-ui/react';

import Search from '../components/Search';

export default function Home() {
  return (
    <>
      <Header />
      <Container display='flex' alignItems='center' height='600px' maxW='5xl'>
        <Search />
      </Container>
    </>
  );
}
