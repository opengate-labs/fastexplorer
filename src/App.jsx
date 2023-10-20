import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://www.ftnscan.com/graphiql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
