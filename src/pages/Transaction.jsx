import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Skeleton,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import Search from '../components/Search';
import { useQuery, gql } from '@apollo/client';
import { getTransactionByHash } from '../queries';
import { CgCopy } from 'react-icons/cg';
export default function Transaction() {
  const { hash } = useParams();
  const {
    data: response,
    loading,
    error,
  } = useQuery(getTransactionByHash(hash));
  const toast = useToast();

  const copyValue = (value) => {
    navigator.clipboard.writeText(value);
    toast({
      title: 'Copied to clipboard',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'right',
    });
  };

  return (
    <>
      <Header />
      <Container mt={6} height='600px' maxWidth='4xl'>
        <Heading mb={4} fontSize='md'>
          Transaction {hash}
        </Heading>
        <Box w='full' p={4} minH='400px' background='white' borderRadius={12}>
          {loading && (
            <Stack spacing={6}>
              <Skeleton height='10px' />
              <Skeleton height='10px' />
              <Skeleton height='10px' />
              <Skeleton height='10px' />
              <Skeleton height='10px' />
              <Skeleton height='10px' />
              <Skeleton height='10px' />
              <Skeleton height='10px' />
              <Skeleton height='10px' />
              <Skeleton height='10px' />
              <Skeleton height='10px' />
              <Skeleton height='10px' />
            </Stack>
          )}
          {error && <Text>Not Found...</Text>}
          <Stack>
            {response?.transaction?.hash &&
              Object.keys(response?.transaction)
                .filter(
                  (key) => key !== '__typename' && !!response?.transaction[key]
                )
                .map((key) => (
                  <Text key={key}>
                    {key}: {response?.transaction[key]}{' '}
                    <IconButton
                      background='transparent'
                      onClick={() => copyValue(response?.transaction[key])}
                    >
                      <CgCopy />
                    </IconButton>
                  </Text>
                ))}
          </Stack>
        </Box>
        <Search mt={8} />
      </Container>
    </>
  );
}
